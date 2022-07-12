import React from "react";
import Header from "../../organisms/Header/Header";
import FooterComponent from "../../molecules/FooterBar/FooterComponent";
import { styled } from "@mui/styles";

export interface BookDescriptionTemplateProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const BodyComponent = styled("div")({
  position: "relative",
  marginBottom: "177px",
});

const BookDescription = (props: BookDescriptionTemplateProps) => {
  const { body } = props;

  return (
    <div>
      <Header />
      <BodyComponent>{body}</BodyComponent>
      <FooterComponent />
    </div>
  );
};

export default BookDescription;
