import React, { useState } from "react";
import './App.css';
import logo from './dnd-logo.svg';
import Creature from './components/Creature';
import { Draggable } from "react-drag-reorder";


function App() {
  const [creatures] = useState([
    {
      id: '1',
      npc: false,
      name: "Jellifer",
      pc: "Alison",
      level: 2,
      hp: 23,
      ac: 14,
      pp: 13,
      str: 14,
      dex: 16,
      const: 15,
      int: 10,
      wis: 13,
      cha: 9,
    },
    {
      id: '2',
      npc: false,
      name: "Josephine",
      pc: "Kendall",
      level: 2,
      hp: 20,
      ac: 18,
      pp: 13,
      str: 14,
      dex: 8,
      const: 15,
      int: 10,
      wis: 16,
      cha: 12,
    },
    {
      id: '3',
      npc: true,
      name: "Goblin",
      pc: "X",
      level: 1,
      hp: 7,
      ac: 15,
      pp: 9,
      str: 8,
      dex: 14,
      const: 10,
      int: 10,
      wis: 8,
      cha: 8,
    }
  ]);


  return (
    <div className="App">
      <header className="p-5 bg-black text-white">
        <img src={logo} className="w-20" alt='logo'/>
      </header>
      <main className="p-4 grid grid-cols-2 gap-8">
        <section className="grid gap-4">
          <Draggable>
          {creatures
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
          </Draggable>
        </section>
        <section className="border border-blue-500 p-4">
          <h2>Cheat sheets</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
