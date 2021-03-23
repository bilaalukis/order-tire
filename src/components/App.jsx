import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Frontpage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute.jsx";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Frontpage} />
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
