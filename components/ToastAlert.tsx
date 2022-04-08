import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import { useContext } from "react";
import SearchContext from "contexts/SearchContext";

export default function ToastAlert() {
  const [{ errorMessage }, dispatch] = useContext(SearchContext)
  return (
    <ToastContainer position="bottom-center">
      <Toast
        bg="danger"
        autohide
        show={!!errorMessage}
        onClose={() => dispatch({
          type: "setErrorMessage",
          value: ""
        })}
      >
        <Toast.Header className="justify-content-between h5">
          Oops...
        </Toast.Header>
        <Toast.Body className="text-white">{errorMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
