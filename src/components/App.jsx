import React, { useState, useEffect } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Frontpage from "./Frontpage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute.jsx";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      const datalist = await axios.get("api/tires");
      setData(datalist.data);
    };
    onMount();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Frontpage {...props} data={data} />}
            />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
