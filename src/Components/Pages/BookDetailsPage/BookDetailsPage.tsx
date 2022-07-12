import React from "react";
import Header from "../../organisms/Header/Header";
import FooterComponent from "../../molecules/FooterBar/FooterComponent";
import BookDescriptionLayout from "../../templates/BookDescription/BookDescriptionLayout";
import BookDescription from "../../organisms/BookDescription/BookDescription";

const BookDetailsPage = () => {
  return (
    <>
      <BookDescriptionLayout
        header={<Header />}
        body={<BookDescription />}
        footer={<FooterComponent />}
      />
    </>
  );
}

export default BookDetailsPage;
