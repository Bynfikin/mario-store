import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface FormFieldProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const FormField = ({ 
  label, 
  error, 
  placeholder,
  ...props 
}: FormFieldProps) => {
  return (
    <View className="mb-4">
      {label && <Text className="mb-1 text-gray-700">{label}</Text>}
      <TextInput
        className="w-full bg-gray-200 rounded-md px-4 py-3 text-black"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error && <Text className="mt-1 text-red-500 text-sm">{error}</Text>}
    </View>
  );
};

interface FormProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Form = ({ children, title, description }: FormProps) => {
  return (
    <View className="w-full">
      {title && <Text className="text-xl font-bold mb-2">{title}</Text>}
      {description && <Text className="text-gray-600 mb-4">{description}</Text>}
      {children}
    </View>
  );
};

export default Form;