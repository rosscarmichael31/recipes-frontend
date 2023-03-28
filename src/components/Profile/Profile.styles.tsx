import styled from "styled-components";

const Avatar = styled.img`
  border-radius: 50%;
  width: 2.88725em;
  margin-right: 0.5em;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1em;
  /* border: 0;
  margin: 0; */
  /* width: 10%; */
`;

const Name = styled.div`
  font-size: 1.2em;
  color: #f7f2dc;
`;

const Loading = styled.div`
  color: #f7f2dc;
  padding: 1em;
  font-size: 1.2em;
`;

const styles = { Avatar, ProfileContainer, Name, Loading };
export default styles;
