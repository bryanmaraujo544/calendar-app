import { useState } from "react";

interface ErrorProps {
  field: string,
  message: string
}

interface UseErrorsProps {
  setError({ field, message }: ErrorProps): void,
  removeError(fieldName: string): void,
  getErrorMessageByFieldName(fieldName: string): string,
  errors: any
}

export const useErrors = () => {
  const [errors, setErrors] = useState([] as any);
  console.log('errors', errors);

  function setError({ field, message }: ErrorProps) {
    const errorAlreadyExists = errors.find((error: ErrorProps) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevErrors: ErrorProps[]) => [
      ...prevErrors,
      { field, message }
    ]);
  };

  function removeError(fieldName: string) {
    setErrors((prevErrors: ErrorProps[]) => prevErrors.filter(
      (error: ErrorProps) => error.field !== fieldName
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