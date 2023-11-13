export const formatNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  let formattedValue = "";

  for (let i = 0; i < cleanedValue.length; i++) {
    if (i === 2 || i === 5 || i === 8) {
      formattedValue += " ";
    }
    formattedValue += cleanedValue[i];
  }

  return formattedValue.slice(0, 15);
};
