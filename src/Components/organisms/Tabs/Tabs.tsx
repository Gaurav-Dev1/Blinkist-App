import { makeStyles, styled, ThemeProvider } from "@mui/styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { Container, Tab } from "@mui/material";


 const MainContainer = styled("div")({
  width: '912px',
  display:'flex',
});

const TabsContainer = styled("div")({
  width: "100%",
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
    console.log(event)
    setValue(newValue);
  };

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
                    fontFamily: 'Cera Pro',
                    lineHeight: '23px'
                  }}
                />
                <Tab data-testId = "Tab1"
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
                    fontFamily: 'Cera Pro',
                    lineHeight: '23px'
                  }}
                />
              </TabList>
            </Container>
            <TabPanel value="1">
             Currently Reading Books
            </TabPanel>
            <TabPanel value="2">
              Finished Books
            </TabPanel>
          </TabContext>
        </TabsContainer>
      </MainContainer>
    
  );
};

export default Tabs;
