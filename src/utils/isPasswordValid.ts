export const isPasswordValid = (str: string) => {
  const regex = /(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
  return regex.test(str);
};