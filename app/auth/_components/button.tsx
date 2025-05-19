import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  label: string;
  fullWidth?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  label, 
  fullWidth = true, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "py-3 px-4 rounded-md justify-center items-center";
  
  const variantStyles = {
    primary: "bg-red-600",
    secondary: "bg-gray-300",
  };
  
  const textStyles = {
    primary: "text-white font-medium",
    secondary: "text-black font-medium",
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <TouchableOpacity
      className={classNames(
        baseStyles,
        variantStyles[variant],
        widthStyles,
        className
      )}
      {...props}
    >
      <Text className={textStyles[variant]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;