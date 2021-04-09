import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from"./pages/shop/shop.component";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <Switch>
          <Route  exact path="/" component={HomePage} />
          <Route  exact path="/shop" component={ShopPage} />
          <Route  exact path="/signin" component={SignInAndSignUpPage} />
          {/* <HomePage /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
