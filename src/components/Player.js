import React, { useState, useCallback } from 'react';
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "../use-raised-shadow";

export const Player = ({item}: Props) => {
  const [count, setCount]=useState(item.hp);
  const OnIncrementClick = useCallback((e) => {
    setCount(count+1);
  }, [count]);

  const OnDecrementClick = useCallback((e) => {
    setCount(count-1);
  }, [count]);

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const [imageSrc, setImageSrc] = useState('logo512.png');
  const changeImageSrc = (playerName) => {
    setImageSrc(playerName);
  }

  let hitPointsBlock;
  let borderClass;


  if (item.npc === true) {
    borderClass = "border-b-2 border-red-500 peer-checked:shadow-[-10px_0px_0px_rgba(239,68,68,1)]";
    hitPointsBlock = <section className="py-5"></section>
  } else {
    borderClass = "border-b-2 border-sky-500 peer-checked:shadow-[-10px_0px_0px_rgba(58,130,194,1)]";
    hitPointsBlock = <div className="flex flex-row content-center p-4 ml-auto">
            <h2 className="text-3xl font-bold mr-2">{count}</h2>
            <div onClick={OnIncrementClick} className="mt-1.5 mr-2 cursor-pointer select-none border border-gray-300 w-6 h-6 flex align-center justify-center leading-5 rounded bg-gray-100 hover:border-slate-500 transition-all">+</div>
            <div onClick={OnDecrementClick} className="mt-1.5 cursor-pointer select-none border border-gray-300 w-6 h-6 flex align-center justify-center leading-5 rounded bg-gray-100 hover:border-slate-500 transition-all">-</div>
      </div>
  }


  console.log(borderClass);


  return (
    <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
     <section className={`block font-sans mb-2 cursor-grab active:cursor-grabbing`}>
        <input type="radio" id={item.name} name="fav_language" value={item.name} className="ml-4 hidden peer"/>
        <div className="fixed top-[10%] right-[1%] hidden peer-checked:block">
          <img className="" src={imageSrc} alt="character avatar" />
        </div>
        <label for={item.name} className={`px-4 flex content-center bg-white ` + borderClass} onClick={() => changeImageSrc(item.image)}>
          <span className="flex flex-wrap content-center font-bold mr-2 ">{item.name}</span>
          <span className="flex flex-wrap content-center text-gray-500">{item.pc}</span>
          {hitPointsBlock}
        </label>
    </section>
    </Reorder.Item>
  );
};

