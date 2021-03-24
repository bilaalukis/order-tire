import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AddToCart from "./AddToCart";

export default function TableDash(props) {
  const Styles = styled.div`
    .cont {
      background: url("https://i.ibb.co/jDWhS6m/tire2.jpg") no-repeat fixed
        bottom;
      background-size: cover;
      color: #efefef;
      height: 200px;
      position: relative;
      z-index: -2;
    }
  `;

  const [cardShow, setCardShow] = useState(false);
  const [itemInfo, setItemInfo] = useState([]);

  function handleClick(e) {
    setCardShow(true);
    let info = {
      tiretype: e.target.parentNode.childNodes[0].innerText,
      stock: e.target.parentNode.childNodes[3].innerText,
    };
    setItemInfo(info);
  }

  const history = useHistory();
  return (
    <React.Fragment>
      <Container>
        <Styles>
          <div className="cont"></div>
        </Styles>
        <Table responsive bordered hover>
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
            {props.data.map((e) => {
              if (e.size === 12) {
                return (
                  <tr key={e.id} onClick={handleClick}>
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{e.stock}</td>
                    <td>{e.price}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>

        <Styles>
          <div className="cont"></div>
        </Styles>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Tire-type</th>
              <th>Size</th>
              <th>Grade</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((e) => {
              if (e.size === 13) {
                return (
                  <tr key={e.id} onClick={handleClick}>
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{e.stock}</td>
                    <td>{e.price}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>

        <Styles>
          <div className="cont"></div>
        </Styles>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Tire-type</th>
              <th>Size</th>
              <th>Grade</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((e) => {
              if (e.size === 14) {
                return (
                  <tr key={e.id} onClick={handleClick}>
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{e.stock}</td>
                    <td>{e.price}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>

        <Styles>
          <div className="cont"></div>
        </Styles>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Tire-type</th>
              <th>Size</th>
              <th>Grade</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((e) => {
              if (e.size === 15) {
                return (
                  <tr key={e.id} onClick={handleClick}>
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{e.stock}</td>
                    <td>{e.price}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>
        <AddToCart
          show={cardShow}
          onHide={() => setCardShow(false)}
          item={itemInfo}
          setCart={props.setCartNum}
          cartNum={props.cartNum}
        />
      </Container>
    </React.Fragment>
  );
}
