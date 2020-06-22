export const round = (n: number, decimals: number) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
