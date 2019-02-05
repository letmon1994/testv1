import React from 'react';
//import axios from 'axios';

class Fighter extends React.Component {
  state = {
    activeFighter: []
  }

  componentDidMount = async () => {
    const name = this.props.location.state.fighter;
    const req = await fetch ('https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/iphone/fighters');
    const res = await req.json();
    this.setState({activeFighter: res.fighters[0]});
    console.log(this.state.activeFighter);
  }

  render() {
    const fighter =this.state.activeFighter
    return (
      <div className="container">
         <div className="active-fighter">
           <img className="active-fighter-img" src={fighter.profile_image} alt={fighter.name}/>
         </div>
      </div>
    );
  }
};

export default Fighter;
