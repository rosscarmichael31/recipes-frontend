import s from "./ClearForm.styles";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  onClose: () => void;
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ClearForm: React.FC<Props> = ({ onClose, setIngredients }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const deleteAllFridgeList = async () => {
    let idToken: string = "";
    try {
      idToken = await getAccessTokenSilently();
    } catch (err) {
      console.warn("Please login");
    }
    if (isAuthenticated) {
      fetch(
        `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/fridge/all`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        }
      );
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLElement>) => {
    deleteAllFridgeList();
    setIngredients([]);
    onClose();
  };

  return (
    <s.ClearForm>
      <s.Body>All ingredients will be cleared.</s.Body>
      <s.Buttons>
        <s.Cancel onClick={onClose}>Cancel</s.Cancel>
        <s.Delete onClick={handleClear}>Clear</s.Delete>
      </s.Buttons>
    </s.ClearForm>
  );
};
