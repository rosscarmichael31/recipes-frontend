import React from "react";
import s from "./LoginButton.styles";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <s.Login onClick={() => loginWithRedirect()}>
      <s.Icon />
    </s.Login>
  );
};

export default LoginButton;
