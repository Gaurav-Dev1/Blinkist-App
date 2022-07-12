import React, { useState} from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import BlinkistLogo from "../../atoms/Logo/BlinkistLogo.svg";
import IconButtonComponent from "../../atoms/IconButton/IconButton";
import { ReactComponent as Search } from "../../../Images/Search.svg";
import { ReactComponent as Dropdown } from "../../../Images/Dropdown.svg";
import { AvatarIcon } from "../../atoms/Avatar/Avatar";
import ExploreTabOpen from "../ExploreTabOpen/ExploreTabOpen";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth0();
  console.log("userName " + user?.name);
  console.log("user => " + JSON.stringify(user, null, 2));

  const [iconStyle, setIconStyle] = useState({
    transform: "rotate(0deg)",
  });

  const [explore, setExplore] = useState(false);
  const [signout, setSignout] = useState(false);

  const expandExploreTab = () => {
    explore ? setExplore(false) : setExplore(true);
    if (explore) setIconStyle({ transform: "rotate(0deg)" });
    else setIconStyle({ transform: "rotate(180deg)" });
  };

  const expandAccount = () => {
    signout ? setSignout(false) : setSignout(true);
  };

  const openLibraryPage = () => {
    navigate("/myLib");
  };
  console.log("user = " + user);
  console.log("isAuthenticated " + isAuthenticated);
  return (
    <>
      <Box sx={{ height: "86px", width: "100%", display: "flex" }}>
        <Box
          sx={{ marginTop: "30px", marginBottom: "30px", marginLeft: "250px" }}
        >
          <Logo src={BlinkistLogo} />
        </Box>

        <Box
          sx={{
            marginTop: "25px",
            marginBottom: "32.69px",
            marginLeft: "42.91px",
          }}
        >
          <IconButtonComponent children={<Search />} />
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: "33px",
            marginBottom: "33px",
            marginLeft: "41.69px",
          }}
        >
          <Box>
            <Typography variant="body1">Explore</Typography>
          </Box>
          <Box sx={{ marginLeft: "6.7px" }}>
            <IconButtonComponent
              data-testid="expand-explore"
              onClick={expandExploreTab}
              children={<Dropdown />}
              style={iconStyle}
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "33px",
            marginBottom: "33px",
            marginLeft: "40px",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="body1"
            onClick={openLibraryPage}
            data-testid="my-library"
          >
            My Library
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: "23px",
            marginBottom: "23px",
            marginLeft: "420px",
          }}
        >
          {!isAuthenticated ? (
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Account
            </Typography>
          ) : (
            <Box>
              <AvatarIcon letter={user?.name?.charAt(0)} />
            </Box>
          )}

          <Box sx={{ marginTop: "10px", marginLeft: "6.7px" }}>
            <IconButtonComponent
              onClick={expandAccount}
              children={<Dropdown />}
              data-testid="expand-explore"
            />
          </Box>
        </Box>
      </Box>
      {explore ? <ExploreTabOpen /> : null}
      {signout ? <LogoutButton /> : null}
    </>
  );
};

export default Header;
