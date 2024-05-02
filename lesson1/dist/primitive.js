//number
let a = 10;
//string
let b = "Sergey";
//boolean
export let c = true;
//null
let d = null;
//undefined
let e = undefined;
//bigint
let f = 1234n;
//symbol
let g = Symbol("1");
// any, unknown
let x = "test";
let y = "test";
// export default {
//   name: "Sergey",
//   age: 30,
// };
const user = {
    name: "Sergey",
    age: 30,
};
x.toUpperCase(); //any
if (typeof y === "string")
    y.toUpperCase(); //unknown
const id = 123;
const name = "Alena";
export { a, b, name as womanName };
export default user;
