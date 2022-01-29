import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue = '' as string) => {
  const [state, setState] = useState(() => {
    try {
      const stateInLocal = localStorage.getItem(key);

      return stateInLocal ? JSON.parse(stateInLocal) : initialValue;
    } catch {
      return initialValue;
    }
  });

  function setValue(value: any) {
    console.log('value', value);
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  return [state, setValue];
};
