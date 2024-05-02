function sum(a: number, b: number): string {
  return String(a + b);
}

const sayHi = (name: string): void => {
  console.log("Hi ", name);
};

const createError = (): never => {
  throw new Error("Error");
};

const result = sum(2, 3);
sayHi("Sergey");
//console.log(result);
