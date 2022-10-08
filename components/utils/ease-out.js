export const easeOutCirc = (x) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};
