import React, { useRef, useState } from "react";
import { Form, Button, Card, Table, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import NavibarDash from "./NavibarDash";

export default function Cart(props) {
  // const [error, setError] = useState("");
  const history = useHistory();

  console.log(props.order[0]);

  const arr = [];
  props.order.forEach((e) => {
    arr.push(e.orderNum * e.price);
  });
  let res = 0;
  if (arr.length > 0) {
    res = arr.reduce((acc, curr) => acc + curr);
  }

  async function handleSubmit(e) {}
  return (
    <React.Fragment>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh " }}
      >
        <div className="w-100" style={{ maxWidth: "800px" }}>
          <Card>
            <Card.Body>
              <h2 className="test-center mb-4">Your Cart</h2>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Tire-type</th>
                    <th>Size</th>
                    <th>Grade</th>
                    <th>Price</th>
                    <th>Order Number</th>
                  </tr>
                </thead>

                <tbody>
                  {props.order.map((e, i) => {
                    return (
                      <tr key={e.tiretype}>
                        <td>{e.tiretype}</td>
                        <td>{e.size}</td>
                        <td>{e.grade}</td>
                        <td>{e.price}</td>
                        <td>{e.orderNum}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {props.order[0].price ? (
                <div>Total price: ${res} </div>
              ) : (
                <div>Total price: Nothing in cart</div>
              )}
            </Card.Body>
            <Button variant="success" onClick={handleSubmit}>
              Confirm Order
            </Button>
            <div className="d-flex justify-content-center mt-0">
              <Link to="/dashboard">
                <Button variant="danger">Cancel Order</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </React.Fragment>
  );
}
