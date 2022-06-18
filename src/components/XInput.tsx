import React from 'react';
import '../styles/Input.scss';


export interface InputProps {
    /**
     * Is the type of input
     * 
    */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url' | 'date' | 'time' | 'datetime' | 'month' | 'week' | 'color' | 'file' | 'submit' | 'reset' | 'button' | 'image' | 'hidden' | 'search';

  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Input = ({
  label,
  type,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={label}
      className={['input'].join(' ')}
      {...props}
    />
  );
};
export default Input;

