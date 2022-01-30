export const getDaysInMonth = (year: number, month: number) => {
  // const month = date.getMonth();
  // const year = date.getFullYear();

  // When I am grabbin the first day of the month, the range of month is 0 - 11
  const firstDayDate = new Date(year, month, 1);

  // When I am grabbing the last day of the month, the range of mongth is 1 - 12
  const date = new Date(year, month + 1, 0);
  console.log('date of the last day of the month', date);
  const daysInMonth = new Date(year, month, 0).getDate();
  return { firstDayDate, daysInMonth};
};
