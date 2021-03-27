import React, { useState } from "react";
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
  // Stock number for dropdown
  const [itemNum, setItemNum] = useState(0);
  const stock = props.item.stock;
  const num = [];

  for (let i = 1; i <= stock; i++) {
    num.push(i);
  }

  //
  function handleClick(e) {
    setItemNum(e.target.innerText);
  }

  //
  function onAdd() {
    let newNum = props.cartNum + 1;
    props.setCart(newNum);
    props.onHide();
    props.item.orderNum = itemNum;
    props.setOrder((prev) => [...prev, props.item]);
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
                  <th>Size</th>
                  <th>Grade</th>
                  <th>Stock</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.item.tiretype}</td>
                  <td>{props.item.size}</td>
                  <td>{props.item.grade}</td>
                  <td>{props.item.stock}</td>
                  <td>{props.item.price}</td>
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
