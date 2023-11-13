export const formatNumber = (value: string) => {
  const number = value.replace(/[^\d]/g, "");
  if (number.length < 4) return number;
  if (number.length < 7) {
    return `(${number.slice(0, 2)}) ${number.slice(3)}`;
  }
};
