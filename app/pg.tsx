"use client";
import Image from "next/image";
import { join } from "path";
import { useState } from "react";

const symbols = ["banana", "apple", "melon", "777"];

export default function Pg() {
  const [value, setValue] = useState("");
  const [itog, setItog] = useState(0);

  const ver = 1 / symbols.length;

  const [selectedVegs, setSelectedFruit] = useState(["banana"]);
  const handlerFruit = (fruit: string, idx: number) => {
    const state = [...selectedVegs];
    if (fruit === "None" && fruit[idx]) {
      console.log("LOG");
      delete state[idx];
    } else {
      state[idx] = fruit;
    }

    setSelectedFruit(state);
  };

  const handler = () => {
    setItog(() => turnSumm(Number(value), selectedVegs));
  };
  return (
    <div className="flex min-h-screen flex-col items-center  p-24">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="enter the number of iterations"
      />
      <div className="flex justify-center">
        <select
          value={selectedVegs[0] || "None"}
          onChange={(e) => handlerFruit(e.target.value, 0)}
        >
          <option value="banana">banana</option>
          <option value="apple">apple</option>
          <option value="melon">melon</option>
          <option value="777">777</option>
          <option value="None">None</option>
        </select>
        <select
          value={selectedVegs[1] || "None"}
          onChange={(e) => handlerFruit(e.target.value, 1)}
        >
          <option value="banana">banana</option>
          <option value="apple">apple</option>
          <option value="melon">melon</option>
          <option value="777">777</option>
          <option value="None">None</option>
        </select>
        <select
          value={selectedVegs[2] || "None"}
          onChange={(e) => handlerFruit(e.target.value, 2)}
        >
          <option value="banana">banana</option>
          <option value="apple">apple</option>
          <option value="melon">melon</option>
          <option value="777">777</option>
          <option value="None">None</option>
        </select>
      </div>
      <button onClick={() => handler()}>turn</button>
      <div>selected : {String(selectedVegs)}</div>
      <div>Itog: {itog}</div>
      <div>Itog %: {(itog / Number(value)) * 100}</div>
    </div>
  );
}

const turnSumm = (sum: number, mapping: string[]) => {
  let s = 0;
  for (let i = 0; i < sum; i++) {
    let t = turn();
    let indexes = 0;
    let length = mapping.length;
    for (let j = 0; j < mapping.length; j++) {
      console.log(i, "wef", mapping[j]);
      if (!!mapping[j]) {
        let indexOf = t.indexOf(mapping[j]);
        if (indexOf !== -1) {
          delete t[indexOf];
          indexes++;
        }
      } else length--;
    }
    if (indexes === length) {
      s++;
    }
  }
  return s;
};

const turn = () => {
  let result = [];

  for (let i = 0; i < 3; i++) {
    result.push(symbols[Math.floor(Math.random() * 4)]);
  }
  return result;
};
