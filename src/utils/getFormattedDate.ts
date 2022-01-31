export const getFormattedDate = (dateStr: string) => {
  const dt = new Date(dateStr);
  const month = (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth() + 1);
  const day = (dt.getDate() < 10 ? '0' : '') + (dt.getDate());

  const date = (`${dt.getFullYear().toString()}-${month.toString()}-${day.toString()}`);
  return date;
}
