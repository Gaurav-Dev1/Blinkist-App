import React from "react";
import EntrepreneurshipTemplate from "../../templates/Entrepreneurship/EntrepreneurshipTemplate";
import BannerComponent from "../../molecules/Banner/BannerComponent";
import BookCategories from "../../organisms/BookCategories/BookCategories";
import SearchBarComponent from "../../molecules/SearchBar/SearchBarComponent";

const EntrepreneurshipPage = () => {
  return (
    <>
      <EntrepreneurshipTemplate
        banner={<BannerComponent />}
        searchBar={<SearchBarComponent />}
        trendingBlinks={
          <BookCategories title="Trending blinks" status="trending" />
        }
        justAddedBlinks={
          <BookCategories title="Just added" status="justAdded" />
        }
        featuredBlinks={
          <BookCategories title="Featured audio blinks" status="featured" />
        }
      />
    </>
  );
};

export default EntrepreneurshipPage;
