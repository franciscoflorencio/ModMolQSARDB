 import React from 'react';
 import { StyledButton } from './styles';

 interface ButtonProps{
    href: string;
    children: React.ReactNode;
 }

 const Button: React.FC<ButtonProps> = ({href, children}) => {
    return (
        <StyledButton href={href}>
            {children}
        </StyledButton>
    );
 };

 export default Button;