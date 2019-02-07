import React from 'react';
import { Link } from "react-router-dom";

class UserCard extends React.Component {
  render() {
    return (
      <div className="column is-3">
        <div className="card" >
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt='Profile' src={this.props.image}></img>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.name} {this.props.lName}</p> <br></br>
                {this.props.weightC ? <p className="subtitle"><p className="title is-4"> Divsion: </p>{this.props.weightC}</p> : null}
              </div>
            </div>
          </div>
           <footer class="card-footer">
             <button class="card-footer-item">
                <Link to={{ pathname: `/fighter/${this.props.id}`, fighter: this.props}}>See Fighter Information</Link>

             </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default UserCard;
