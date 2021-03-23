import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navigationbar from "./Navigationbar";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("A reset password email has been sent to your inbox");
    } catch {
      setError("This email does not exist");
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Navigationbar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh " }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="test-center mb-4">Reset Password</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button disabled={loading} className="w-40 " type="submit">
                    Reset Password
                  </Button>
                </div>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/login">Log In</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
