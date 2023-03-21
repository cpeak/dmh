import React, { useState, useCallback } from 'react';
import { useMotionValue, Reorder } from "framer-motion";
import Stat from './Stat';
import Bonus from './Bonus';

export const Creature = ({item}: Props) => {
  const [count, setCount]=useState(item.hp);
  const OnIncrementClick = useCallback((e) => {
    setCount(count+1);
  }, [count]);

  const OnDecrementClick = useCallback((e) => {
    setCount(count-1);
  }, [count]);
  const y = useMotionValue(0);

  return (
    <Reorder.Item value={item} id={item} style={y}>
      <section className="border border-slate-300 font-sans bg-white mb-2">
        <header className={`${item.npc ? 'bg-red-900': 'bg-black'} py-1 px-2 flex justify-between gap-4 text-white text-xs font-medium`}>
          <h2 className="font-bold">{item.name} ({item.pc})</h2>
          <p>Level {item.level}</p>
      </header>
      <main className="px-2 py-2 pb-3 flex justify-between">
        <div className="flex gap-4">
          <section className="w-12 text-center">
            <span className="text-slate-500 text-xs">Str</span>
            <Stat value={item.str} />
            <Bonus value={item.str} />
          </section>
          <section className="w-12 text-center">
            <span className="text-slate-500 text-xs">Dex</span>
            <Stat value={item.dex} />
            <Bonus value={item.dex} />
          </section>
          <section className="w-12 text-center">
            <span className="text-slate-500 text-xs">Const</span>
            <Stat value={item.const} />
            <Bonus value={item.const} />
          </section>
          <section className="w-12 text-center">
            <span className="text-slate-500 text-xs">Int</span>
            <Stat value={item.int} />
            <Bonus value={item.int} />
          </section>
          <section className="w-12 text-center">
            <span className="text-slate-500 text-xs">Wis</span>
            <Stat value={item.wis} />
            <Bonus value={item.wis} />
          </section>
          <section className="w-12 text-center">
            <span className="text-slate-500 text-xs">Cha</span>
            <Stat value={item.cha} />
            <Bonus value={item.cha} />
          </section>
        </div>
        <div className="flex gap-10">
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">AC</span>
            <h3 className="text-3xl mb-2 font-black">{ item.ac }</h3>
          </section>
          <section className="w-12 text-center">
            <span className="font-bold text-slate-400">PP</span>
            <h3 className="text-3xl mb-2 font-black">{ item.pp }</h3>
          </section>
        </div>
        <div className="text-center w-20">
          <h2 className="text-4xl font-black mb-2">{count}</h2>
          <section className="flex justify-between px-2">
            <div onClick={OnIncrementClick} className="cursor-pointer select-none border border-gray-300 w-6 h-6 flex align-center justify-center leading-5 rounded bg-gray-100 hover:border-slate-500 transition-all">+</div>
            <div onClick={OnDecrementClick} className="cursor-pointer select-none border border-gray-300 w-6 h-6 flex align-center justify-center leading-5 rounded bg-gray-100 hover:border-slate-500 transition-all">-</div>
          </section>
        </div>
      </main>
      </section>
    </Reorder.Item>
  );
};

