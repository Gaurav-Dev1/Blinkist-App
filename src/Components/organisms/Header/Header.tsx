import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../atoms/Logo/Logo';
import BlinkistLogo from '../../atoms/Logo/BlinkistLogo.svg'
import IconButtonComponent from '../../atoms/IconButton/IconButton';
import {ReactComponent as Search} from '../../../Images/Search.svg';
import {ReactComponent as Dropdown} from '../../../Images/Dropdown.svg';
import { AvatarIcon } from '../../atoms/Avatar/Avatar';

const Header = () => {
    return (
        <Box sx ={{height: '86px', width: '100%',  display: 'flex'}}>
            <Box sx = {{marginTop: '30px', marginBottom: '30px', marginLeft: '250px'}}>
                <Logo src = {BlinkistLogo}/>
            </Box>
            
            <Box sx = {{marginTop: '25px', marginBottom: '32.69px', marginLeft: '42.91px', }}>
                <IconButtonComponent children={<Search />}/>
            </Box>
            
            <Box sx = {{display: 'flex', marginTop: '33px', marginBottom: '33px', marginLeft: '41.69px'}}>
                <Box>
                    <Typography variant='body1'>Explore</Typography>
                </Box>
                <Box sx = {{marginLeft: '6.7px'}}>
                    <IconButtonComponent children = {<Dropdown/>}/>
                </Box>
            </Box>
            
            <Box sx = {{marginTop: '33px', marginBottom: '33px', marginLeft: '40px'}}>
                <Typography variant = 'body1' >
                    My Library
                </Typography>
            </Box>
            
            <Box sx = {{display: 'flex',marginTop: '23px', marginBottom: '23px', marginLeft: '450px'}}>
                <Box >
                    <AvatarIcon />
                </Box>
                <Box sx = {{marginTop: '10px', marginLeft : '6.7px'}}>
                    <IconButtonComponent children = {<Dropdown/>}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;