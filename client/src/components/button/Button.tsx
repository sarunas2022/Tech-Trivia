import React, { FC, ReactNode, FormEvent } from 'react';
import './button.scss';

interface ButtonProps {
<<<<<<< HEAD
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
=======
    color: string;
    onClick: (e: React.FormEvent) => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, children }) => {
    return (
        <button style={{ backgroundColor: color }} onClick={onClick}>
            {children}
        </button>
    );
>>>>>>> 408ee08bcb526ae0f7fe80097cc6e8189922d150
};

export default Button;
