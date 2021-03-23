import React from "react";
import { Container, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function TableFront(props) {
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
            </tr>
          </thead>
          <tbody>
            {props.data.map((e) => {
              let res = "";
              if (e.stock <= 10) {
                res = "Very few";
              } else if (e.stock > 10 && e.stock <= 25) {
                res = "Some";
              } else {
                res = "Many";
              }

              if (e.size === 12) {
                return (
                  <tr
                    key={e.id}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{res}</td>
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
              let res = "";
              if (e.stock <= 10) {
                res = "Very few";
              } else if (e.stock > 10 && e.stock <= 25) {
                res = "Some";
              } else {
                res = "Many";
              }

              if (e.size === 13) {
                return (
                  <tr
                    key={e.id}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{res}</td>
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
              let res = "";
              if (e.stock <= 10) {
                res = "Very few";
              } else if (e.stock > 10 && e.stock <= 25) {
                res = "Some";
              } else {
                res = "Many";
              }

              if (e.size === 14) {
                return (
                  <tr
                    key={e.id}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{res}</td>
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
              let res = "";
              if (e.stock <= 10) {
                res = "Very few";
              } else if (e.stock > 10 && e.stock <= 25) {
                res = "Some";
              } else {
                res = "Many";
              }

              if (e.size === 15) {
                return (
                  <tr
                    key={e.id}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    <td>{e.tiretype}</td>
                    <td>{e.size}</td>
                    <td>{e.grade}</td>
                    <td>{res}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
