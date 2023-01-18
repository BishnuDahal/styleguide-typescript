import React from 'react';
import randString from '../../../utils/randomString';

const InputField: React.FC<any> = (props) => {
  const {name, label, register, placeHolder, values, disabled, type, helperText, errors} = props
  const id = randString(20, `-${name}`)
  return (
    <div className="relative mb-6 rounded">
      <input
        id={id}
        type={type}
        {...register(name)}
        className="relative peer bg-gray-200 p-2 rounded w-full text-gray-700 focus: outline-none border-b-2 border-gray-300 focus:border-purple-600 transition duration-500"
        placeholder={placeHolder ?? " "}
        // value={values[name] ?? ""}
        disabled={disabled}
        autoComplete={"off"}
      />
      {Boolean(errors[name]) && <p className='text-sm text-red-500'>{errors[name]?.message}</p>}
      <p className='text-xs text-blue-500'>{helperText}</p>
      <label
        htmlFor={id}
        className="absolute left-2 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;