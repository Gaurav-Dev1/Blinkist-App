import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Search from "./../../../Images/Search.svg";

const useStyles = makeStyles({
  inputBar: {
    width: 278,
    height: 24,
    fontfamily: "Cera Pro",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    border: "none",
    color: "#6D787E",
    marginLeft: "25px",
    "&:focus": {
      outline: "none",
    },
  },
  boxElement: {
    width: 598,
    height: 28,
    borderBottom: "2px solid #6D787E",
    display: "flex",
    flexDirection: "row",
  },
  imageDiv: {
    marginLeft: "2.96px",
    marginTop: "2.96px",
    paddingBottom: "6.65px",
  },
  imageProps: {
    width: "18.39px",
    height: "18.39px",
  },
});
function SearchBarComponent() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.boxElement}>
        <div className={classes.imageDiv}>
          <img src={Search} alt="search logo" className={classes.imageProps} />
        </div>
        <input
          type="text"
          placeholder="Search by title or author"
          className={classes.inputBar}
        />
      </Box>
    </div>
  );
}

export default SearchBarComponent;
