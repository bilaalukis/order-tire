import React from "react";
import { Nav, Navbar, Badge, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ShoppingBar(props) {
  //   const history = useHistory();

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="ml-auto">
            <Nav.Item variant="dark">
              <Link to="/cart">
                <Button variant="outline-info">
                  Shopping cart 🛒 <Badge variant="dark">{props.cartNum}</Badge>
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
