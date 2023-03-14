import React, {useState, useCallback} from 'react';
import Stat from './Stat';
import Bonus from './Bonus';

function Creature(props) {

    const [count, setCount]=useState(props.hp);
    const OnIncrementClick = useCallback((e) => {
        setCount(count+1);
      }, [count]);

      const OnDecrementClick = useCallback((e) => {
        setCount(count-1);
    }, [count]);

  return (
    <section
      className="border border-slate-300 font-sans bg-white"
      id={props.id}
    >
      <header className={`${props.npc ? 'bg-red-900': 'bg-black'} p-2 flex justify-between gap-4 text-white text-xs font-bold`}>
        <h2>{props.name} ({props.pc})</h2>
        <h3>Lvl {props.level}</h3>
      </header>
      <main className="px-2 py-4 flex justify-between">
        <div className="flex gap-4">
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">Str</span>
            <Stat value={props.str} />
            <Bonus value={props.str} />
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">Dex</span>
            <Stat value={props.dex} />
            <Bonus value={props.dex} />
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">Const</span>
            <Stat value={props.const} />
            <Bonus value={props.const} />
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">Int</span>
            <Stat value={props.int} />
            <Bonus value={props.int} />
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">Wis</span>
            <Stat value={props.wis} />
            <Bonus value={props.wis} />
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">Cha</span>
            <Stat value={props.cha} />
            <Bonus value={props.cha} />
          </section>
        </div>
        <div className="flex gap-10">
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">AC</span>
            <h3 className="text-4xl mb-2 font-black">{ props.ac }</h3>
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">PP</span>
            <h3 className="text-4xl mb-2 font-black">{ props.pp }</h3>
          </section>
        </div>
        <div className="text-center w-20">
          <h2 className="text-5xl font-black mb-4">{count}</h2>
          <section className="flex justify-between">
            <div onClick={OnIncrementClick} className="cursor-pointer select-none border border-gray-300 w-6 h-6 flex align-center justify-center leading-5 rounded bg-gray-100 hover:border-slate-500 transition-all">+</div>
            <div onClick={OnDecrementClick} className="cursor-pointer select-none border border-gray-300 w-6 h-6 flex align-center justify-center leading-5 rounded bg-gray-100 hover:border-slate-500 transition-all">-</div>
          </section>
        </div>
      </main>
    </section>
  )
}

export default Creature;
