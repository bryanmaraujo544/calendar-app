export const getFormattedDate = (dateStr: string) => {
  console.log({ dateStr });
  const dt = new Date(dateStr);
  const month = (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth() + 1);
  const day = (dt.getDate() < 10 ? '0' : '') + (dt.getDate());

  const date = (`${dt.getFullYear().toString()}-${month.toString()}-${day.toString()}`);
  console.log('DATE', date);
  return date;
}
