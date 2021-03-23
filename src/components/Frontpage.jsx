import React from "react";
import Jumbo from "./Jumbo";
import Navigationbar from "./Navigationbar";
import TableFront from "./TableFront";

export default function Frontpage(props) {
  return (
    <React.Fragment>
      <Navigationbar />
      <Jumbo />
      <TableFront data={props.data} />
    </React.Fragment>
  );
}
