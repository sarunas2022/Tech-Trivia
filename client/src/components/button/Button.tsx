import React, { FC, ReactNode, FormEvent } from 'react';
import './button.scss';

interface ButtonProps {
  color: string;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  className?: string; 
}

const Button: FC<ButtonProps> = ({ color, onClick, children, className }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
