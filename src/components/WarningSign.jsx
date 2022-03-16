import { useState } from "react";
import { Alert } from "react-bootstrap";

function CustomAlert(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Warning! Books Incoming!</Alert.Heading>
        <p>{props.message}</p>
      </Alert>
    );
  }
}

export default CustomAlert;
