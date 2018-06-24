import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import LoginPage from "./page/LoginPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <LoginPage />
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
