import React from 'react';
import { Box , Typography} from '@mui/material';
import { makeStyles,styled } from '@mui/styles';
import { Constants } from '../../../Data/Constants';
import IconText from '../../molecules/IconText/IconText';
import Time from '../../../Images/Time.svg'
import ButtonComponent from '../../atoms/Buttons/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AboutBookTab from '../AboutBook/AboutBook';
import Book10 from '../../../Images/Book10.svg'

// const useStyles = makeStyles({
//     keyIdeasTextTypography: {
//         fontFamily: 'Cera Pro',
//         fontStyle: 'normal',
//         fontWeight: 400,
//         fontSize: '16px',
//         lineHeight: '20px',
//         color: '#03314B'
//     }
// })

const MainContainer = styled('div') ({
    position: 'relative',
    display: 'flex',
    width: '912px',
    height: '718px',
    marginLeft: '264px',
    borderBottom: '1px solid #E1ECFC'
})

const LeftContainer = styled('div') ({
    
})

const RightContainer = styled('div') ({
    width: 304,
    height: 304,
    position: 'relative',
    top: 120
})

const TabsContainer = styled("div")({
    position: "relative",
    top: 160,
});

// const KeyIdeasContainer = styled('div') ({
//     display: 'flex',
//     flexDirection: 'column'
// })

// const BookDetailsContainer = styled('div') ({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 24,
//     position: 'relative',
//     marginTop: '40px'
// })

// const LeftContainer = styled('div') ({
    
// })

const BookDescription = () => {

    // const styles = useStyles();

    return (
        <MainContainer>
            <LeftContainer>
                <Box sx={{marginTop: '60px'}}>
                    <Typography variant='body2' sx={{color: '#03314B'}} >{Constants.bookDescription.keyIdeas}</Typography>
                </Box>
                <Box sx={{marginTop: '40px'}}>
                    <Typography variant='h1' sx={{color: '#03314B'}}>{Constants.bookDescription.title}</Typography>
                </Box>
                <Box sx={{marginTop: '24px'}}>
                    <Typography variant='subtitle5' sx={{color: '#03314B'}} >{Constants.bookDescription.description}</Typography>
                </Box>
                <Box sx={{marginTop: '24px'}}>
                    <Typography variant='body1' sx={{color: '#03314B'}} >{Constants.bookDescription.author}</Typography>
                </Box>
                <Box sx={{marginTop: '19px'}}>
                    <IconText variant='caption3' imgSrc={Time} title={Constants.bookDescription.timeToRead}/>
                </Box>
                <Box sx={{display: 'flex', marginTop: '83px'}}>
                    <Box>
                        <ButtonComponent variant={'outlined'}  children={'ReadNow'} 
                        style={{
                            width: 122,
                            height: 44,
                            borderRadius: 4,
                            textTransform: "none",
                            border: "1px solid #042330",
                        }}
                        />
                    </Box>

                    <Box sx={{marginLeft: '20px'}}>
                        <ButtonComponent  variant={'contained'} children = {'Finished Reading'}
                        style={{
                            height: '44px'
                        }}
                        />
                    </Box>

                    <Box sx={{marginLeft: '31.5px'}}>
                        <ButtonComponent variant={'text'} children={'send to kindle' } endIcon={<ArrowForwardIcon />}
                        style={{
                            color: "#6D787E",
                            fontSize: 16,
                            textTransform: "none",
                            width: 151,
                            height: 44,
                        }}
                        />   
                    </Box>
                </Box>
                <Box sx= {{marginTop: '50px'}}>
                    <AboutBookTab />
                </Box>   
            </LeftContainer>
            <RightContainer>
                <img src={Book10}/>
            </RightContainer>
        </MainContainer>
    );
}

export default BookDescription;