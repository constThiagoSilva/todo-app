import React, { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onCLick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({title, onCLick, ...rest}: ButtonProps) => {
    return (
        <Container onClick={onCLick} {...rest}>
            {title}
        </Container>
    )
}