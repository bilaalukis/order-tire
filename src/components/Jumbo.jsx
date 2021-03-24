import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";

export default function Jumbo() {
  const Styles = styled.div`
    .jumbo {
      background: url("https://i.ibb.co/jDWhS6m/tire2.jpg") no-repeat fixed
        bottom;
      background-size: cover;
      color: #efefef;
      height: 200px;
      position: relative;
      z-index: -2;
    }
    .overlay {
      background-color: #000;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  `;

  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome to Tiretron</h1>
        </Container>
      </Jumbotron>
    </Styles>
  );
}
