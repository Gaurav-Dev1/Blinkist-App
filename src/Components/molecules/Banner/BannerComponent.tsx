import React from 'react';
import { Container, ThemeProvider, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import readingLady from '../../../Images/ReadingLady.svg'
import theme from "../../../Themes/Theme";
import BannerData from '../../../Data/BannerData';

export interface BannerProps {

  className?: string;
  style?: React.CSSProperties;
  children?:React.ReactNode;
}

const MainContainer = styled('div') ({

  width: '912px',
  height: '230px',
  background: '#F1F6F4',
  display: 'flex',
  gap: '112px',
})

const LeftBannerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "15px",
  top: "45px",
  bottom: "45px",
  left: "45px",
});

const LeftTopContainer = styled('div') ({
  width: '319px',
  height: '90px',
})

const LeftBottomContainer = styled("div")({
  width: "461px",
  height: "69px",   
});

const RightContainer = styled('div') ({})

function BannerComponent(props:BannerProps) {
  return (
    <ThemeProvider theme = {theme}>
      <Container  className={props.className}>
      <MainContainer>
        <LeftBannerContainer>

          <LeftTopContainer>
          <Typography variant="h1">{BannerData.heading}</Typography>
          </LeftTopContainer>
          
          <LeftBottomContainer>
            <Typography variant='subtitle1' color='#6D787E'>{BannerData.description}</Typography>
          </LeftBottomContainer>
        
        </LeftBannerContainer>
        <RightContainer>
          <img src={readingLady} alt="reading lady" />
        </RightContainer>
      </MainContainer>
    </Container>
    </ThemeProvider>
    
  );
}

export default BannerComponent;