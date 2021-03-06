import React from "react";
import { Link } from "react-router-dom";
//import axios from 'axios';

class Fighter extends React.Component {
  //Initialise the state in a constructor
  constructor(props) {
    super(props);

    this.state = { fighter: [] };
  }

  render() {
    console.log(this.props.location.fighter);
    return (
      /* Conditional Rendering to see if the fighter state has been changed in the componentDidMount*/
      this.props.location.fighter ? (
        <div className="container">
          <div className="active-fighter">
            <img
              className="active-fighter-img"
              src={this.props.location.fighter.image}
              alt={this.props.location.fighter.name}
            />
            <h3 className="fighters name">
              {" "}
              <b>Name</b>: {this.props.location.fighter.name}{" "}
              {this.props.location.fighter.lName}
            </h3>
            <h3 className="fighters nickName">
              {" "}
              <b>Nick Name</b>: {this.props.location.fighter.nickName}
            </h3>
            <h3 className="fighters weightClass">
              {" "}
              <b>Weight Division</b>: {this.props.location.fighter.weightC}
            </h3>
            <h3 className="fighters status">
              {" "}
              <b>Fighters Status</b>:{" "}
              {this.props.location.fighter.fighterStatus}
            </h3>
            <h3 className="fighters wins">
              {" "}
              <b>Wins</b>: {this.props.location.fighter.wins}
            </h3>
            <h3 className="fighters draws">
              {" "}
              <b>Draws</b>: {this.props.location.fighter.draws}
            </h3>
            <h3 className="fighters losses">
              {" "}
              <b>Losses</b>: {this.props.location.fighter.losses}
            </h3>
            <h3 className="title holder">
              {" "}
              <b>Title Holder</b>: {this.props.location.fighter.titleHolder}
            </h3>
            <button className="go home">
              <Link to="/">Home Page</Link>
            </button>
          </div>
        </div>
      ) : null
    );
  }
}

export default Fighter;
