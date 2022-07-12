import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import theme from "../../../Themes/Theme";
import { makeStyles } from "@mui/styles";

export interface IconTextProps {
  imgSrc?: string;
  title?: string;
  className?: string;
  onClick?: () => void;
  variant:
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit"
    | "caption3";
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

  const { imgSrc, title, variant,  onClick } = props;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} data-testid="IconText">
        <Box>
          <img src={imgSrc} />
        </Box>
        <Box sx={{ marginLeft: "5px" }}>
          <Typography
            variant={variant}
            sx={{ color: "#6D787E" }}
            onClick={onClick}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default IconText;
