import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import classnames from 'classnames';

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (val: string) => void;
  className?: string;
}

const Input = ({ onChange, className, ...props }: IInput) => {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onChange?.(val);
  };

  return (
    <div
      className={classnames(
        'h-10 w-full border-[1px] border-solid px-2',
        className,
        focus ? 'border-black' : 'border-gray-400',
      )}>
      <input
        {...props}
        className="h-full w-full focus:outline-none"
        value={value}
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default Input;
