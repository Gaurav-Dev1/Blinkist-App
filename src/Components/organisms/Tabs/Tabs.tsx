import { makeStyles, styled, ThemeProvider } from "@mui/styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { Container, Tab } from "@mui/material";
import api from "../../../Axios/api";
import BookCard, { BookInfo } from "../BookCard/BookCard";

const MainContainer = styled("div")({
  width: "912px",
  display: "flex",
});

const TabsContainer = styled("div")({
  width: "100%",
});

const CardStyling = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "25px 19px",
  width: 912,
  position: "relative",
});

const useStyles = makeStyles({
  containerStyling: {
    borderBottom: "2px solid #E1ECFC",
  },
  tabStyling: {
    width: 304,
    alignSelf: "flex-start",
  },
  selectedTab: {
    color: "#22C870 !important",
  },
});

const Tabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);
    setValue(newValue);
  };

  const [books, setBooks] = useState<BookInfo[]>([
    {
      id: 0,
      title: "",
      author: "",
      timeToRead: "",
      numberOfReads: "",
      image: "",
      status: {
        isFinished: false,
        isFeatured: false,
        isTrending: false,
        justAdded: false,
        inLibrary: false,
      },
    },
  ]);

  const [count, setCount] = useState(0);
  const getBooks = async () => {
    const bookResponse = await api.get("/library");
    const data = bookResponse.data;
    setBooks(data);
  };

  let incrementCount = () => {
    console.log("count increased");
    setCount(count + 1);
  };

  useEffect(() => {
    getBooks();
  }, [count]);

  const styles = useStyles();

  return (
    <MainContainer>
      <TabsContainer>
        <TabContext value={value}>
          <Container className={styles.containerStyling}>
            <TabList
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#2CE080",
                },
              }}
            >
              <Tab
                classes={{ selected: styles.selectedTab }}
                label="Currently Reading"
                value="1"
                sx={{
                  width: 304,
                  alignItems: "flex-start",
                  textTransform: "none",
                  position: "relative",
                  marginLeft: -2,
                  fontSize: 18,
                  fontFamily: "Cera Pro",
                  lineHeight: "23px",
                }}
              />
              <Tab
                classes={{ selected: styles.selectedTab }}
                label="Finished"
                value="2"
                sx={{
                  width: 304,
                  alignItems: "flex-start",
                  textTransform: "none",
                  position: "relative",
                  marginLeft: -2,
                  fontSize: 18,
                  fontFamily: "Cera Pro",
                  lineHeight: "23px",
                }}
              />
            </TabList>
          </Container>
          <TabPanel value="1">
            <CardStyling>
              {books
                .filter(
                  (item) => !item.status.isFinished && item.status.inLibrary
                )
                .map((book, index) => {
                  return (
                    <BookCard
                      id={book.id}
                      key={index}
                      image={book.image}
                      title={book.title}
                      author={book.author}
                      timeToRead={book.timeToRead}
                      numberOfReads={book.numberOfReads}
                      isFinished={!book.status.isFinished}
                      value={book.id}
                      onClick={incrementCount}
                    />
                  );
                })}
            </CardStyling>
          </TabPanel>
          <TabPanel value="2">
            <CardStyling>
              {books
                .filter(
                  (item) => item.status.isFinished && item.status.inLibrary
                )
                .map((book, index) => {
                  return (
                    <BookCard
                      id={book.id}
                      key={index}
                      image={book.image}
                      title={book.title}
                      author={book.author}
                      timeToRead={book.timeToRead}
                      numberOfReads={book.numberOfReads}
                      readAgain={book.status.isFinished}
                      value={book.id}
                      onClick={incrementCount}
                    />
                  );
                })}
            </CardStyling>
          </TabPanel>
        </TabContext>
      </TabsContainer>
    </MainContainer>
  );
};

export default Tabs;
