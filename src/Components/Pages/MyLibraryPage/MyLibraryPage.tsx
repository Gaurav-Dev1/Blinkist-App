import React from "react";
import MyLibraryTemplate from "../../templates/MyLibrary/MyLibraryTemplate";
import Tabs from "../../organisms/Tabs/Tabs";

const MyLibraryPage = () => {
  return (
    <>
      <MyLibraryTemplate body={<Tabs />} />
    </>
  );
}

export default MyLibraryPage;
