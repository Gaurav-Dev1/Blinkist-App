import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

    <Button onClick={() => logout({ returnTo: window.location.origin })} sx={{marginLeft: '1150px', zIndex:1, color: 'black', backgroundColor: '#F1F6F4'}} variant='outlined'>
      Log Out
    </Button>
  );
};

export default LogoutButton;