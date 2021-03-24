import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavibarDash(props) {
  const history = useHistory();

  async function handleLogout() {
    props.setError("");

    try {
      await props.logout();
      history.push("/login");
    } catch {
      props.setError("Failed to log out");
    }
  }

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Tiretron</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="ml-auto">
            <Nav.Item>
              <Nav.Link disabled>
                Currently logged in as {props.currentUser.email}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/update-profile">Update Profile</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
