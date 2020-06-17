export interface GameData {
  buyMultiplier: number;
  items: any[];
  money: number;
}

export interface GameDBData {
  __v: string;
  _id: string;
  createdAt: string;
  data: string;
  updatedAt: string;
}
