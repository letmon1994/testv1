/* React Example - UserCard used in the UserProfileList Demo
USING PROPTYPES - https://reactjs.org/docs/typechecking-with-proptypes.html
Styled using Bulma (https://bulma.io).
- AE 12/02/18
*/

import React from 'react';
import PropTypes from 'prop-types';
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
                <p className="title is-4">{this.props.name} {this.props.lName}</p>
                {this.props.weightC ? <p className="subtitle">{this.props.weightC}</p> : null}
              </div>
            </div>
          </div>
           <footer class="card-footer">
             <button class="card-footer-item">
                <Link to={{ pathname: `/fighter/${this.props.user_id}`, state: {fighter: this.props.name}}}>See Fighter Information</Link>
             </button>
          </footer>
        </div>
      </div>
    );
  }
}

// Specifies the default values for props:
UserCard.defaultProps = {
  first_name: 'randomuser',
  image: 'http://via.placeholder.com/600x600',
  weight_class: ''
};

// Checks that the correct type of props are supplied:
UserCard.propTypes = {
  first_name: PropTypes.string,
  last_class: PropTypes.string,
  image: PropTypes.string,
  weight_class: PropTypes.string
};

export default UserCard;
