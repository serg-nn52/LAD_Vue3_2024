type BossType = {
  name: string;
  staff: number;
  age: number;
};

export interface IWorker {
  name: string;
  age: number;
}

interface IBoss extends IWorker {
  staff: number;
}

type TCar = "Audi" | "Bmw";

interface IBoss {
  car: TCar;
  [key: string]: unknown;
}

export { IBoss };
