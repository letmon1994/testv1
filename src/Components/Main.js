import React from "react";
import {Route,NavLink,BrowserRouter,Switch} from "react-router-dom";
import Home from "./Home";
import PoundForPound from "./PoundForPound";
import Fighter from "./Fighter";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>UFC API</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/PoundForPound">Ranks pound for pound</NavLink></li>
          </ul>
          <div className="content">
           <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/fighter/:id" component={Fighter}/>
            <Route path="/PoundForPound" component={PoundForPound}/>
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
