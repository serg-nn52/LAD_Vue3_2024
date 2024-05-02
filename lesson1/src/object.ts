import { a as num, b, womanName, c } from "./primitive";
import worker from "./primitive";
import type { IBoss, IWorker } from "./type";

//console.log(num, b, womanName, c, worker);

const boss: IBoss = {
  name: "Direktor",
  staff: 100,
  age: 40,
  car: "Bmw",
};

boss.child = 3;

const arr: (string | number)[] = ["apple", "banana", "pineapple", 1];
const arr2: Array<string> = ["", "qwerty"];

export {};
