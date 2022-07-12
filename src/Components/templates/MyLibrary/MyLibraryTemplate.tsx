import React from "react";
import FooterComponent from "../../molecules/FooterBar/FooterComponent";
import Header from "../../organisms/Header/Header";
import { styled } from "@mui/styles";
import { Typography, Box } from "@mui/material";

const MyLibraryContainer = styled("div")({
  marginLeft: "245px",
  marginTop: "59px",
  marginBottom: "111px",
});

export interface MyLibraryTemplateProps {
  body?: React.ReactNode;
}

const MyLibraryTemplate = (props: MyLibraryTemplateProps) => {
  let { body } = props;

  return (
    <div>
      <Header />
      <Box
        sx={{ marginBottom: "59px", marginLeft: "264px", marginTop: "60px" }}
      >
        <Typography variant="h1">My Library</Typography>
      </Box>
      <MyLibraryContainer>{body}</MyLibraryContainer>
      <FooterComponent />
    </div>
  );
}

export default MyLibraryTemplate;
