import React from 'react';

interface IErrorMessage {
  error: any
}

const ErrorMessage = (props: IErrorMessage) => {
  const {error} = props
  return (
    <p className={"text-red-500 font-sm"}>
      {error}
    </p>
  );
};

export default ErrorMessage;