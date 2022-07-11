import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import theme from "../../../Themes/Theme";
import { makeStyles } from "@mui/styles";

export interface IconTextProps {
  imgSrc?: string;
  title?: string;
  className?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  IconTextTypography: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontHeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#6D787E",
    },
});

const IconText = (props: IconTextProps) => {

  const styles = useStyles();

  const { imgSrc, title, className, onClick } = props;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <img src={imgSrc} />
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography className={styles.IconTextTypography}>{title}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default IconText;
