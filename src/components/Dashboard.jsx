import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import NavibarDash from "./NavibarDash";
import TableDash from "./TableDash";
import Jumbo from "./Jumbo";
import ShoppingBar from "./ShoppingBar";
import axios from "axios";

// import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [data, setData] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    const onMount = async () => {
      const datalist = await axios.get("api/tires");
      setData(datalist.data);
    };
    onMount();
  }, []);

  return (
    <React.Fragment>
      <NavibarDash
        currentUser={currentUser}
        logout={logout}
        setError={setError}
      />
      <Jumbo />
      {error && <Alert variant="danger">{error}</Alert>}
      <ShoppingBar cartNum={cartNum} />
      <TableDash data={data} setCartNum={setCartNum} cartNum={cartNum} />
    </React.Fragment>
  );
}
