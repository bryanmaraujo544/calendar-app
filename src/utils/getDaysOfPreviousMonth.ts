export const getDaysOfPreviousMonth = (year: number, month: number) => {
  const previousYear = (month === 0 ? year - 1 : year);
  const previousMonth = (month === 0 ? 11 : month - 1);

  // When I am grabbing the last day of the month, the range of mongth is 1 - 12
  const daysInLastMonth = new Date(previousYear, previousMonth + 1, 0).getDate();
  return { daysInLastMonth };
}
