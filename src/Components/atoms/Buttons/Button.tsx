import React from 'react';
import { Button } from '@mui/material';


export interface ButtonIconProps {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    color?: string,
    variant?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    onClick?: () => void;
    className?: string;
    
}

export const ButtonComponent = (props: any) => {

    const {variant, style,children, color, onClick, className, startIcon, endIcon} = props;
    return (
        <>
            <Button 
             startIcon={startIcon}
             variant={variant}
             style={style}
             color={color}
             onClick={onClick}
             className={className}
             endIcon={endIcon}
            >
                {children}
            </Button>
        </>
    );
}

export default ButtonComponent;