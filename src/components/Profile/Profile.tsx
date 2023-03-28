import { useAuth0 } from "@auth0/auth0-react";
import s from "./Profile.styles";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <s.Loading>Loading...</s.Loading>;
  }

  return (
    <s.ProfileContainer>
      {isAuthenticated ? (
        <>
          <s.Avatar src={user?.picture} alt={user?.name} />
          <s.Name>{user?.given_name}</s.Name>
          <LogoutButton />
        </>
      ) : (
        <>
          <s.Name>Login</s.Name>
          <LoginButton />
        </>
      )}
    </s.ProfileContainer>
  );
};

export default Profile;
