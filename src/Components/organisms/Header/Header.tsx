import React, { useState, useSyncExternalStore } from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../atoms/Logo/Logo';
import BlinkistLogo from '../../atoms/Logo/BlinkistLogo.svg'
import IconButtonComponent from '../../atoms/IconButton/IconButton';
import {ReactComponent as Search} from '../../../Images/Search.svg';
import {ReactComponent as Dropdown} from '../../../Images/Dropdown.svg';
import { AvatarIcon } from '../../atoms/Avatar/Avatar';
import ExploreTabOpen from '../ExploreTabOpen/ExploreTabOpen';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const openExploreTab = () => {
        console.log(`explore tab invoked`)
    }

    const [iconStyle, setIconStyle] = useState({
        transform: "rotate(0deg)"
    })

    const [explore,setExplore] = useState(false)

    const expandExploreTab = () => {
        explore ? setExplore(false) : setExplore(true)
        if(explore) 
            setIconStyle({ transform: "rotate(0deg)" })
        else 
            setIconStyle({ transform: "rotate(180ded)"})
    }

    const openLibraryPage = () => {
        
        navigate('/')
    }
    return (
        <>
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
                <Box sx = {{marginLeft: '6.7px', iconStyle }}>
                    <IconButtonComponent onClick={expandExploreTab} children = {<Dropdown/>}/>
                </Box>
            </Box>
            
            <Box sx = {{marginTop: '33px', marginBottom: '33px', marginLeft: '40px'}}>
                <Typography variant = 'body1' onClick={openLibraryPage}>
                    My Library
                </Typography>
            </Box>
            
            <Box sx = {{display: 'flex',marginTop: '23px', marginBottom: '23px', marginLeft: '420px'}}>
                <Box >
                    <AvatarIcon />
                </Box>
                <Box sx = {{marginTop: '10px', marginLeft : '6.7px'}}>
                    <IconButtonComponent  children = {<Dropdown/>}/>
                </Box>
            </Box>
        </Box>
        {
            explore ? <ExploreTabOpen /> : null
        }
        </>
    );
}

export default Header;