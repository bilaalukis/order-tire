import React from "react";
import { Nav, Navbar, Badge, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

export default function ShoppingBar(props) {
  //   const history = useHistory();

  async function handleOrder() {}

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="ml-auto">
            <Nav.Item variant="dark">
              <Button onClick={handleOrder} variant="outline-info">
                Shopping cart 🛒 <Badge variant="dark">{props.cartNum}</Badge>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
