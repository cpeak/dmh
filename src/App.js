import * as React from "react";
import { useState } from "react";
import './App.css';
import logo from './dnd-logo.svg';
import data from './data/creatures';
import { Reorder } from "framer-motion";
import { Creature } from './components/Creature';

export default function App() {

  const [items, setItems] = useState(data);

  return (
    <div className="">
      <header className="fixed left-0 right-0 p-5 bg-black text-white">
        <img src={logo} className="w-20" alt='logo'/>
      </header>
      <main className="p-4 grid grid-cols-2 gap-8 pt-24 bg-gray-200 h-screen overflow-y-scroll">
        <section className="">

          <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item) => (
              <Creature
                key={item.id}
                item={item}
              />
            ))}
          </Reorder.Group>
        </section>

        <section className="p-4 bg-white">
          <h2>Cheat sheets</h2>
        </section>
      </main>
    </div>
  );
}

