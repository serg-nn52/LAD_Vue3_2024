//number
let a: number = 10;

//string
let b: string = "Sergey";

//boolean

export let c: boolean = true;

//null
let d: null = null;

//undefined
let e: undefined = undefined;

//bigint

let f: bigint = 1234n;

//symbol

let g: symbol = Symbol("1");

// any, unknown

let x: any = "test";

let y: unknown = "test";

// export default {
//   name: "Sergey",
//   age: 30,
// };

const user = {
  name: "Sergey",
  age: 30,
};

x.toUpperCase(); //any
if (typeof y === "string") y.toUpperCase(); //unknown

type IdType = string | number;

const id: IdType = 123;

//literal

type NameType = "Sergey" | "Marina" | "Alena";

const name: NameType = "Alena";

export { a, b, name as womanName };
export default user;
