import React from "react";
import UserCard from "./UserCard";
import DropDown from "./DropDown";
import RadioButton from "./RadioButton";
import Input from "./Input";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      fighters: [],
      filteredFighters: [],
      tHolderSelected: "all",
      weightClassSelected: "all",
      weightClassValues: [],
      sort: "no",
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    //Get a number of fighters from the API and store their information in state
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/iphone/fighters"
      )
      .then(data => {
        console.log(data);

        const fighters = data.data.map(fighter => {
          return {
            key: fighter.id,
            name: fighter.first_name,
            lName: fighter.last_name,
            image: fighter.profile_image,
            tHolder: fighter.title_holder,
            weightClass: fighter.weight_class,
            nickName: fighter.nickname,
            fighterStatus: fighter.fighter_status,
            wins: fighter.wins,
            draws: fighter.draws,
            losses: fighter.losses
          };
        });
        this.setState({ fighters: fighters, filteredFighter: fighters });

        // sort and remove duplicate weight class
        // store the result in state to be used for the dropdown menu options
        const weightC = fighters.map(fighter => {
          return fighter.weightClass;
        });
        const deduped = [...new Set(weightC)];
        deduped.sort();
        this.setState({ weightClassValues: deduped });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    // handle both of the <select> UI elements
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  // handleSearch(event){
  //   this.setState({
  //     searchText: event.target.value
  //   });
  //   let filteredFighters = this.state.fighters.filter((user) =>{
  //       let userName = user.name.toLowerCase()
  //       return userName.indexOf(event.target.value.toLowerCase()) !== -1
  //   });
  //   console.log(filteredFighters);
  //   this.setState({
  //      filteredFighters
  //   });
  // }

  render() {
    // if results are to be sorted, create a copy of the fighter data and sort it,
    // otherwise just use the original data from the state
    const data =
      this.state.sort === "no"
        ? this.state.fighters
        : [].concat(this.state.fighters).sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
    console.log(data);
    // Generate unique fighter cards for each fighter
    // Each card needs a unique key, for our purposes we're using
    // name + image URL (not guaranteed to be unique, but sufficient for this)
    // Check the state of the inputs and skip cards not matching the
    // required weight class & title holder & search text
    let fighterList = data.map(fighter => {
      // console.log(this.state.tHolderSelected);
      // console.log(fighter.tHolder);
      const tHolderMatch =
        this.state.tHolderSelected === fighter.tHolder.toString() ||
        this.state.tHolderSelected === "all";
      const weightCMatch =
        this.state.weightClassSelected === fighter.weightClass ||
        this.state.weightClassSelected === "all";
      // const nameMatch = fighter.name.toLowerCase().startsWith(this.state.searchText.toLowerCase());
      const nameMatch =
        fighter.name.toLowerCase().indexOf(this.state.searchText) >= 0;
      return tHolderMatch && weightCMatch && nameMatch ? (
        <UserCard
          id={fighter.key}
          name={fighter.name}
          lName={fighter.lName}
          image={fighter.image}
          weightC={fighter.weightClass}
          fighterStatus={fighter.fighterStatus}
          nickName={fighter.nickName}
          wins={fighter.wins}
          draws={fighter.draws}
          losses={fighter.losses}
          titleHolder={fighter.tHolder.toString()}
        />
      ) : null;
    });

    return (
      <section className="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <Input
                name="searchText"
                label="Search by name"
                value={this.state.searchText}
                handleChange={this.handleChange}
                placeholder={"e.g. conor"}
              />
            </div>

            <div class="column is-vcentered">
              <DropDown
                options={["all", "true", "false"]}
                name="tHolderSelected"
                handleChange={this.handleChange}
                label="Title Holder"
                selected={this.state.tHolderSelected}
              />

              <DropDown
                options={["all"].concat(this.state.weightClassValues)}
                name="weightClassSelected"
                handleChange={this.handleChange}
                label=" Weight Division"
                selected={this.state.weightClassSelected}
              />

              <RadioButton
                handleChange={this.handleChange}
                checked={this.state.sort}
              />
            </div>
          </div>

          <div className="columns is-multiline">{fighterList}</div>
        </div>
      </section>
    );
  }
}

//Export component
export default Home;
