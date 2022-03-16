import { useState } from "react";
import { Alert } from "react-bootstrap";

function CustomAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Warning! Books Incoming!</Alert.Heading>
        <p>
          The site doesn't take any responsibilities for damage or injuries
          caused by possessed/cursed books.
        </p>
      </Alert>
    );
  }
}

export default CustomAlert;
