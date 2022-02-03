import { useState } from "react";

interface ErrorProps {
  field: string,
  message: string
}

interface UseErrorsProps {
  setError({ field, message }: ErrorProps): void,
  removeError({ field, message }: ErrorProps): void,
  getErrorMessageByFieldName(fieldName: string): string,
  errors: any
}

export const useErrors = () => {
  const [errors, setErrors] = useState([] as any);
  console.log({ errors });

  function setError({ field, message }: ErrorProps) {
    const errorAlreadyExists = errors.find((error: ErrorProps) => error.field === field && error.message === message);

    if (errorAlreadyExists) return;

    setErrors((prevErrors: ErrorProps[]) => [
      ...prevErrors,
      { field, message }
    ]);
  };

  function removeError({ field, message }: ErrorProps) {
    setErrors((prevErrors: ErrorProps[]) => prevErrors.filter(
      (error: ErrorProps) => error.field !== field || error.message !== message
    ));
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error: ErrorProps) => error.field === fieldName)?.message;
  }

  // getErrorMessageByFieldName('title');

  return {
    setError, removeError, getErrorMessageByFieldName, errors
  } as UseErrorsProps;
}
