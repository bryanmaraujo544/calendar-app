export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date();
  // const month = date.getMonth();
  // const year = date.getFullYear();

  const daysInMonth = new Date(year, month, 0).getDate();
  return daysInMonth;
};
