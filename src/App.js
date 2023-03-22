import * as React from "react";
import { useState } from "react";
import './App.css';
import logo from './dnd-logo.svg';
import multi from './data/multi';
import { Reorder } from "framer-motion";
import Select from "react-select";
import { Creature } from './components/Creature';

export default function App() {

  const options = [
    { label: "Goblin Ambush", value: 0 },
    { label: "Goblin Hideout", value: 1 }
  ];

  const defaultSelected = options.find((opt) => 1);

  const [selected, setSelected] = useState(defaultSelected);
  const [items, setItems] = useState(multi[selected.value].creatures);

  const onChange = (option) => {
    setSelected(option);
    setItems(multi[option.value].creatures);
  }


  return (
    <div className="">
      <header className="fixed z-10 left-0 right-0 p-5 bg-black text-white">
        <img src={logo} className="w-20" alt='logo'/>
      </header>
      <main className="p-4 grid grid-cols-2 gap-8 pt-24 bg-gray-200 h-screen overflow-y-scroll">
        <section className="">


          <Select className="mb-2" options={options} value={selected} onChange={onChange} />

          <Reorder.Group axis="y" layoutScroll onReorder={setItems} values={items}>
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

