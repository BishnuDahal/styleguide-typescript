import React from 'react';
import randString from '../../../utils/randomString';

const InputField: React.FC<any> = (props) => {
  const {name, label, register, placeHolder, values, disabled, type, helperText, errors} = props
  const id = randString(20, `-${name}`)
  return (
    <div className="relative mb-6 rounded">
      <label
        htmlFor={id}
        className="flex text-start items-left text-sm font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(name)}
        className="relative peer p-2 rounded w-full text-gray-700 focus: outline-none border-2 border-[#E0E0E0] focus:border-[#E0E0E0] transition duration-500"
        placeholder={placeHolder ?? " "}
        // value={values[name] ?? ""}
        disabled={disabled}
        autoComplete={"off"}
      />
      {Boolean(errors[name]) && <p className='text-left text-sm text-red-500'>{errors[name]?.message}</p>}
      <p className='text-xs text-blue-500'>{helperText}</p>
      
    </div>
  );
};

export default InputField;