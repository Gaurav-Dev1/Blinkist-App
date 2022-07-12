import React, { useState, useEffect } from "react";
import { makeStyles, styled } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import IconText from "../../molecules/IconText/IconText";
import ProgressBarComponent from "../../atoms/ProgressBar/ProgressBar";
import { ReactComponent as Add } from "../../../Images/Vector.svg";
import User from "../../../Images/UserIcon.svg";
import Time from "../../../Images/Time.svg";
import ButtonComponent from "../../atoms/Buttons/Button";
import api from "../../../Axios/api";
import { useNavigate } from "react-router-dom";
import MeatballsMenu from "../../../Images/MeatballsMenu.svg";

const MainContainer = styled("div")({
  width: "284px",
  height: "485px",
  borderRadius: 8,
  border: "1px solid #E1ECFC",
  position: "relative",
});

const ImageContainer = styled("div")({
  width: "284px",
  height: "292px",
});

const BookInfoContainer = styled("div")({
  position: "relative",
  top: 23,
  left: 16,
  width: 224,
  height: 95,
});

const OtherDetails = styled("div")({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  top: 17,
});

const TimeToReadDiv = styled("div")({
  left: 17.67,
  fontSize: 14,
  position: "relative",
});

const NumberOfReads = styled("div")({
  position: "relative",
  left: 47.33,
  fontSize: 14,
});

let ButtonDiv = styled("div")({
  position: "relative",
  top: 10,
});

let useStyles = makeStyles({
  author: {
    width: "fit-content",
    position: "relative",
    top: 16,
    color: "#6D787E",
    fontSize: 16,
    fontWeight: 500,
  },
  finished: {
    color: "#0365F2 !important",
    position: "relative",
    left: 100,

    //top: 30,
    bottom: "5px",
    fontWeight: 500,
    fontSize: 16,
  },
  title: {
    width: "250px",

    fontWeight: 600,
    fontSize: "18px !important",
    color: "#03314B",
  },
  button: {
    width: "100%",
    height: 52,
    color: "#0365F2 !important",
    "&:hover": {
      color: "white !important",
      backgroundColor: "#0365F2 !important",
      fill: "white",
    },
  },
});

export interface BookCardProps {
  title?: string;
  image?: string;
  author?: string;
  timeToRead?: string;
  numberOfReads?: string;
  readAgain?: boolean;
  id: number;
  value: number;
  className?: string;
  onClick?: () => void;
  isFinished?: boolean;
  addToLibrary?: boolean;
  inLibrary?: boolean;
}

export type BookInfo = {
  id: number;
  title: string;
  author: string;
  image: string;
  timeToRead: string;
  numberOfReads: string;
  status: {
    isFinished: boolean;
    isTrending: boolean;
    justAdded: boolean;
    isFeatured: boolean;
    inLibrary?: boolean;
  };
};

const BookCard = (props: BookCardProps) => {
  const navigate = useNavigate();

  const styles = useStyles();

  const {
    title,
    image,
    author,
    timeToRead,
    isFinished,
    numberOfReads,
    readAgain,
    id,
    value,
    className,
    onClick,
    addToLibrary,
    inLibrary,
  } = props;

  const [iconStyle, setIconStyle] = useState({});

  const handleMouseEnterEvent = () => {
    setIconStyle({
      fill: "white",
      stroke: "white",
    });
  };

  const handleMouseLeaveEvent = () => {
    setIconStyle({});
  };

  const [bookInfo, setBookInfo] = useState<BookInfo>({
    id: 1,
    title: "",
    author: "",
    image: "",
    timeToRead: "",
    numberOfReads: "",
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: false,
      inLibrary: false,
    },
  });

  const updateFinish = async (num: number) => {
    console.log("update button clicked");
    if (bookInfo.status.isFinished) {
      bookInfo.status.isFinished = false;
    } else {
      bookInfo.status.isFinished = true;
    }
    await api.put(`/library/${num}`, bookInfo);
  };

  const addToCurrentlyReading = async (num: number) => {
    console.log("add to current library clicked");
    bookInfo.status.inLibrary = true;
    api.put(`library/${num}`, bookInfo);
  };

  const showBookDetailsPage = (bookId: number) => {
    console.log("book details invoked");
    if (bookId === 10) {
      navigate("/book-details");
    }
  };

  useEffect(() => {
    console.log("effect applied");
    const retrieveBookById = async (val: number) => {
      if (val && val != 0) {
        const book = await api.get(`/library/${val}`);
        const data = book.data;
        setBookInfo(data);
      }
    };

    retrieveBookById(value);
  }, [value]);

  console.log(inLibrary);
  // sx = {{color: '#03314B'}}
  return (
    <MainContainer onClick={onClick}>
      <ImageContainer>
        <img src={image} alt="book" />
      </ImageContainer>
      <BookInfoContainer>
        <Typography
          variant="subtitle1"
          style={{ color: "#03314B", cursor: "pointer" }}
          onClick={() => showBookDetailsPage(value)}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#6D787E", marginTop: "16px" }}
        >
          {author}
        </Typography>
      </BookInfoContainer>
      <OtherDetails>
        <TimeToReadDiv>
          {!timeToRead ? null : (
            <IconText title={timeToRead} imgSrc={Time} variant="caption3" />
          )}
        </TimeToReadDiv>
        <NumberOfReads>
          {!numberOfReads ? null : (
            <IconText title={numberOfReads} imgSrc={User} variant="caption3" />
          )}
        </NumberOfReads>
      </OtherDetails>
      {isFinished ? (
        <div style={{ height: 52, position: "relative", top: 30, bottom: 0 }}>
          <Typography
            variant="body1"
            className={styles.finished}
            onClick={() => updateFinish(value)}
            style={{ cursor: "pointer" }}
          >
            Finished
          </Typography>
          <Box
            sx={{
              width: 284,
              bgcolor: "#F1F6F4",
              borderRadius: "0px 0px 8px 8px",
              boxSizing: "border-box",
              marginTop: "12px",
            }}
          >
            <ProgressBarComponent progress={30} />
          </Box>
        </div>
      ) : null}
      {readAgain ? (
        <div style={{ height: 52, position: "relative", top: 30, bottom: 0 }}>
          <Typography
            variant="body1"
            className={styles.finished}
            onClick={() => updateFinish(value)}
            style={{ cursor: "pointer" }}
          >
            Read Again
          </Typography>
          <Box
            sx={{
              width: 284,
              bgcolor: "#F1F6F4",
              borderRadius: "0px 0px 8px 8px",
              boxSizing: "border-box",
              marginTop: "12px",
            }}
          >
            <ProgressBarComponent progress={100} />
          </Box>
        </div>
      ) : null}
      {/* {
                
                !inLibrary? (
                    <ButtonDiv style={{marginTop: '15px'}}>
                        <ButtonComponent  startIcon={<Add style={iconStyle}/>} className={styles.button} onClick={() => addToCurrentlyReading(value)} onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent} >Add To Library</ButtonComponent>
                    </ButtonDiv>
                ): 
                (
                    <div style={{height: 52, position:'relative',top:30, bottom:0}}>
                    <img src={MeatballsMenu} style={{marginLeft: '247px'}}/>
                    <Box
                    sx={{
                        width: 284,
                        bgcolor: '#F1F6F4',
                        borderRadius: '0px 0px 8px 8px',
                        boxSizing: 'border-box',
                        marginTop: '12px'
                    }}
                    >
                    <ProgressBarComponent progress={isFinished? 100: 30} />
                    </Box>
                    </div>
                )
            } */}
      {/* {
                addToLibrary ? (
                    <ButtonDiv style={{marginTop: '15px'}}>
                        <ButtonComponent  startIcon={<Add style={iconStyle}/>} className={styles.button} onClick={() => addToCurrentlyReading(value)} onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent} >Add To Library</ButtonComponent>
                    </ButtonDiv>
                ): null
            } */}
      {/* {
                
                !inLibrary? (
                    <ButtonDiv style={{marginTop: '15px'}}>
                        <ButtonComponent  startIcon={<Add style={iconStyle}/>} className={styles.button} onClick={() => addToCurrentlyReading(value)} onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent} >Add To Library</ButtonComponent>
                    </ButtonDiv>
                ): null 
            } */}
      {inLibrary ? (
        <div style={{ height: 52, position: "relative", top: 30, bottom: 0 }}>
          <img src={MeatballsMenu} style={{ marginLeft: "247px" }} />
          <Box
            sx={{
              width: 284,
              bgcolor: "#F1F6F4",
              borderRadius: "0px 0px 8px 8px",
              boxSizing: "border-box",
              marginTop: "12px",
            }}
          >
            <ProgressBarComponent progress={isFinished ? 100 : 30} />
          </Box>
        </div>
      ) : null}
      {typeof inLibrary !== undefined && inLibrary === false ? (
        <ButtonDiv style={{ marginTop: "15px" }} data-testid="addToLibrary">
          <ButtonComponent
            startIcon={<Add style={iconStyle} />}
            className={styles.button}
            onClick={() => addToCurrentlyReading(value)}
            onMouseEnter={handleMouseEnterEvent}
            onMouseLeave={handleMouseLeaveEvent}
          >
            Add To Library
          </ButtonComponent>
        </ButtonDiv>
      ) : null}
    </MainContainer>
  );
};

export default BookCard;
