import React from 'react';
import { Box, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Divider} from '@mui/material';
import { ExploreTabData } from '../../../Data/ExploreTabData';
import IconText from '../../molecules/IconText/IconText';
import { useNavigate } from 'react-router-dom';
// import zIndex from "@material-ui/core/styles/zIndex";


const useStyles = makeStyles({
    exploreByOptionTypography: {
        fontfamily: 'Cera Pro',
        fontstyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#116BE9'
    },
    otherOptionTypography: {
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#6D787E'
    },
    IconTextTypography: {
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#6D787E'
    }
})
const ExploreTabOpen = () => {

    const styles = useStyles();
    const navigate = useNavigate();

    const openEntrepreneurshipPage = (exploreType: string) => {
        console.log("method invoked")
        if(exploreType === 'Entrepreneurship') {
            navigate('/entrepreneurShip');
        }
    }

    return (
        <Box  sx={{width: '100%', height: '398px' ,backgroundColor: '#F1F6F4', position: 'absolute', zIndex: 10}}>
            <Box display={'flex'}>
                <Box sx = {{marginLeft: '250px',marginTop: '30px'}}>
                    <Typography className= {styles.exploreByOptionTypography}>Explore By Category</Typography>
                </Box>
                <Box sx = {{marginLeft: '130px',marginTop: '30px'}}>
                    <Typography className= {styles.otherOptionTypography}>See recently added titles</Typography>
                </Box>
                <Box sx = {{marginLeft: '120px',marginTop: '30px'}}>
                    <Typography className= {styles.otherOptionTypography}>See popular titles</Typography>
                </Box>
            </Box>
            <Box sx={{borderBottom: '1px solid #042330',width: '940px' ,marginTop: '24px', marginLeft: '250px', marginRight: '17.36%'}} />

            <Grid container rowSpacing={'20px'} sx = {{width: '940px', marginTop: '4px', marginLeft: '250px'}}>
                {
                    ExploreTabData.map( (data,key) => {
                        return (
                            <Grid item md={4} >
                                <IconText imgSrc={data.imgSrc}  title={data.title} onClick={() => openEntrepreneurshipPage(data.title)} variant="body2" />
                            </Grid>
                        )
                    }  
                    )
                }
            </Grid>
            
        </Box>
        
    );
}

export default ExploreTabOpen;