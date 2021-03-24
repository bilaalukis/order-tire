import React from "react";
import Modal from "react-bootstrap/Modal";
import {
  Container,
  Table,
  Button,
  Dropdown,
  InputGroup,
  DropdownButton,
} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .modal-header {
      display: flex;
      flex-wrap: wrap !important;
  }
  .modal-title h4 {
      font-weight: 200;
  }

  .mb-3{
    height: 250px;
    overflow-y: scroll;
    min-width: 7.1rem;
  }

}
`;

export default function AddToCart(props) {
  const stock = props.item.stock;
  const num = [];

  for (let i = 1; i <= stock; i++) {
    num.push(i);
  }

  function handleClick() {}

  function onAdd() {
    let newNum = props.cartNum + 1;
    props.setCart(newNum);
    props.onHide();
  }

  return (
    <Styles>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add to item to cart?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Tire-type</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.item.tiretype}</td>
                  <td>{props.item.stock}</td>
                </tr>
              </tbody>
            </Table>
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Select number"
                id="input-group-dropdown-1"
              >
                {num.map((e, i) => (
                  <Dropdown.Item onClick={handleClick} key={i} href="#">
                    {e}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </InputGroup>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onAdd}>Add to cart</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Styles>
  );
}
