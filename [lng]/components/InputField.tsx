import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  title: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  as?: 'input' | 'textarea';
}

const InputField: React.FC<InputFieldProps> = ({
  title,
  name,
  required = false,
  placeholder = ' ',
  type = 'text',
  as = 'input',
  ...props
}) => {
  const InputComponent = as;
  return (
    <div className="relative z-0 w-full mb-5 group">
      <InputComponent
        type={as === 'input' ? type : undefined}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        required={required}
        {...props}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {title}{required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};


export default InputField;
