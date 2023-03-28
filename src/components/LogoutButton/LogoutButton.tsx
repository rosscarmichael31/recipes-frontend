import React from "react";
import s from "./LogoutButton.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { SlLogout } from "react-icons/sl";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <s.Logout
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <s.Icon />
    </s.Logout>
  );
};

export default LogoutButton;
