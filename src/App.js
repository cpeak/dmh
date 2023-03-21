import React from "react";
import './App.css';
import logo from './dnd-logo.svg';
import data from './data/creatures';
import Creature from './components/Creature';


function App() {
  return (
    <div className="">
      <header className="fixed left-0 right-0 p-5 bg-black text-white">
        <img src={logo} className="w-20" alt='logo'/>
      </header>
      <main className="p-4 grid grid-cols-2 gap-8 pt-24 bg-gray-200 h-screen overflow-y-scroll">
        <section className="">
          {data
              .sort((a, b) => a.order - b.order)
              .map((creature) => (
                <Creature
                  key = {creature.id}
                  npc = {creature.npc}
                  name = {creature.name}
                  pc = {creature.pc}
                  level = {creature.level}
                  hp = {creature.hp}
                  ac = {creature.ac}
                  pp = {creature.pp}
                  str = {creature.str}
                  dex = {creature.dex}
                  const = {creature.const}
                  int = {creature.int}
                  wis = {creature.wis}
                  cha = {creature.cha}
                />
              ))}
        </section>
        <section className="p-4 bg-white">
          <h2>Cheat sheets</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
