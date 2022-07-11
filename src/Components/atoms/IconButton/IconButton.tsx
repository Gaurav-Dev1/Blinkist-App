import React from 'react';
import { IconButton } from '@mui/material';


export interface IconButtonProps {

    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode
}

const IconButtonComponent = (props:IconButtonProps) => {

    const {style,children,onClick,className} = props

    return (
       <IconButton style = {style} onClick = {onClick} className = {className}
       >
        {children}
       </IconButton>
    );
}

export default IconButtonComponent;