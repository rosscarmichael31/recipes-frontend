import React, { useEffect } from "react";
import s from "./Modal.styles";
import { VscChromeClose } from "react-icons/vsc";

interface Props {
  onClose: () => void;
  title: string;
  children: JSX.Element;
}

export const Modal: React.FC<React.PropsWithChildren<Props>> = ({
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  const closeOnEscapeKeyDown = (event: any) => {
    if ((event.charCode || event.keyCode) === 27) {
      onClose();
    }
  };

  return (
    <s.Modal onClick={onClose}>
      <s.ModalContent onClick={(event) => event.stopPropagation()}>
        <s.ModalHeader>
          <s.ModalTitle>{title}</s.ModalTitle>
          <s.CloseButton onClick={onClose}>
            <VscChromeClose />
          </s.CloseButton>
        </s.ModalHeader>
        <s.ModalBody>{children}</s.ModalBody>
      </s.ModalContent>
    </s.Modal>
  );
};
