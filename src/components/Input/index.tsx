import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "name" | "email" | "password";
  pleceholder: string;
  value: string | number;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  pleceholder,
  value,
  onChangeText,
  ...rest
}: InputProps) => {
  return (
    <Container
      type={type}
      placeholder={pleceholder}
      value={value}
      onChange={onChangeText}
      {...rest}
    />
  );
};
