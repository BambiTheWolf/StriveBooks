import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Registration = () => {
  const [registration, setRegistration] = useState({});
  const [registrationError, setRegistrationError] = useState({});
  const [showComplete, setShowComplete] = useState(false);

  const handleInput = (key, value) => {
    setRegistration({
      ...registration,
      [key]: value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (registration.name.length < 2) {
      formErrors.name = "Name is too short";
    }
    if (registration.surname.length < 3) {
      formErrors.surname = "Surname is too short";
    }
    if (
      registration.password.length < 8 ||
      !registration.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
    ) {
      formErrors.password = "Password not valid";
    }
    if (registration.password !== registration.confirmPassword) {
      formErrors.confirmPassword = "Password doesn't match";
    }
    setRegistrationError({}, () => {
      if (Object.keys(formErrors).length === 0) {
        setShowComplete(true);
      } else {
        setRegistrationError(formErrors);
      }
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {showComplete ? (
        <>
          <h1>Registration completed!</h1>
          <h3>Your details:</h3>
          <p>{registration.name}</p>
          <p>{registration.surname}</p>
          <p>{registration.email}</p>
        </>
      ) : (
        <>
          <h1>Registration Form</h1>
          <Form onSubmit={handleRegistration}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                isInvalid={registrationError.name}
                onChange={(e) => handleInput("name", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {registrationError.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                required
                isInvalid={registrationError.surname}
                onChange={(e) => handleInput("surname", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
                {registrationError.surname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                isInvalid={registrationError.email}
                onChange={(e) => handleInput("email", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                isInvalid={registrationError.password}
                onChange={(e) => handleInput("password", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {registrationError.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                required
                isInvalid={registrationError.confirmPassword}
                onChange={(e) => handleInput("confirmPassword", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {registrationError.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Register</Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Registration;
