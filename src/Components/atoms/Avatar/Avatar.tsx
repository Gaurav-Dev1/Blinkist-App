import React from 'react';
import { Avatar } from '@mui/material';

export interface AvatarProps {
    letter?: string;
    height?: string;
    width?: string;
}

export const AvatarIcon = (props:AvatarProps) => {
    const {letter, height, width} = props;
    return (
        <Avatar sx={{bgcolor: '#69A6E3', width: {width} , height: {height}}}>
            {letter}
        </Avatar>
    );
}
