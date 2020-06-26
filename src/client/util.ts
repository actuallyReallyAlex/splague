export const round = (n: number, decimals: number): number =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);

export const randomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
