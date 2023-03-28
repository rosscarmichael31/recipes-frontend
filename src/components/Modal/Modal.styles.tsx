import styled from "styled-components";

const Modal = styled.div`
  border-radius: 0.25em;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: #606648;
  border-radius: 0.25em;
  border-radius: 0.2rem;
  /* max-width: 50vw;
  max-height: 60vh; */
  /* overflow: scroll; */
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalTitle = styled.h3`
  all: unset;
  font-size: 2rem;
  font-weight: 500;
  padding-top: 0.2em;
  padding-left: 0.6em;
  color: #f7f2dc;
  font-family: "Gloock-Regular";
`;

const ModalBody = styled.ul`
  padding-left: 0;
  margin-left: 0;
`;

const CloseButton = styled.button`
  all: unset;
  border-radius: 0.25em;
  height: 1rem;
  width: 1rem;
  padding: 0.5rem;
  margin-left: 5rem;
  margin-right: 1rem;
  margin-top: 0.6rem;
  color: #f7f2dc;
  cursor: pointer;
  background-color: transparent;
  border-width: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #737a55;
  }
`;

const styles = {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
};
export default styles;
