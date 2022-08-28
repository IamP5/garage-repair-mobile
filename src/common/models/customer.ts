export interface Customer {
  id: string;
  name: string;
  cpf: string;
  car: ICar[];
}

export interface ICar {
  id: string;
  model: string;
  brand: string;
  plate: string;
}