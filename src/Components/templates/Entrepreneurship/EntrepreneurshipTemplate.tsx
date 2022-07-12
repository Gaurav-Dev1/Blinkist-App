import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../molecules/FooterBar/FooterComponent";
import BannerComponent from "../../molecules/Banner/BannerComponent";
import { styled } from "@mui/styles";
import SearchBarComponent from "../../molecules/SearchBar/SearchBarComponent";
import BookCategories from "../../organisms/BookCategories/BookCategories";

export interface EntrepreneurshipTemplateProps {
  banner?: React.ReactNode;
  searchBar?: React.ReactNode;
  trendingBlinks?: React.ReactNode;
  featuredBlinks?: React.ReactNode;
  justAddedBlinks?: React.ReactNode;
}

const BannerContainer = styled("div")({
  marginTop: "32px",
  marginLeft: "140px",
});

const SearchBarContainer = styled("div")({
  marginTop: "50px",
  marginLeft: "264px",
});

const TrendingBlinksContainer = styled("div")({
  marginTop: "80px",
  marginLeft: "264px",
});

const FeaturedBlinksContainer = styled("div")({
  marginTop: "80px",
  marginLeft: "264px",
  marginBottom: "76px",
});

const JustAddedBlinksContainer = styled("div")({
  marginTop: "80px",
  marginLeft: "264px",
});

const EntrepreneurshipTemplate = (props: EntrepreneurshipTemplateProps) => {
  const { banner, searchBar, trendingBlinks, featuredBlinks, justAddedBlinks } =
    props;
  return (
    <div>
      <Header />
      <BannerContainer>{banner}</BannerContainer>

      <SearchBarContainer>{searchBar}</SearchBarContainer>

      <TrendingBlinksContainer>{trendingBlinks}</TrendingBlinksContainer>

      <JustAddedBlinksContainer>{justAddedBlinks}</JustAddedBlinksContainer>

      <FeaturedBlinksContainer>{featuredBlinks}</FeaturedBlinksContainer>

      <Footer />
    </div>
  );
};

export default EntrepreneurshipTemplate;
