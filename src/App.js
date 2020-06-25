//Import React
import React, { Component } from "react";

//Dom Components
import WorkerCard from "./components/WorkerCard";
import Wrapper from "./components/Wrapper";

//Function Components
import SortNamesA from "./components/SortNamesA";
import SortNamesD from "./components/SortNamesD";
import SortOccupationsA from "./components/SortOccupationsA";
import SortOccupationsD from "./components/SortOccupationsD";
import SortPhoneA from "./components/SortPhoneA";
import SortPhoneD from "./components/SortPhoneD";
import Accountants from "./components/Accountants";
import SalesPeople from "./components/SalesPeople";
import Operations from "./components/Operations";
import ShowAll from "./components/ShowAll";
import Title from "./components/Title";

//Data File
import workers from "./workers.json";

class App extends Component {
  //Match this.state to reflect workers .json file

  state = {
    workers
  };

  //Store initial state
  initialstate = {
    workers
  };
  
  removeWorker = id => {
    //Create a filtered workers list (exclude selected id)
    const workers = this.state.workers.filter(worker => worker.id !== id);
    //Set State to new workers list
    this.setState({ workers });
  };

  sortNamesA = name => {
    // Sort worker list by names in ascending alphabetical order
    const workers = this.state.workers.sort((a, b) => a.name.localeCompare(b.name))
    // Set state to match sorted array
    this.setState({ workers });
  };

  sortNamesD = name => {
    // Sort worker list by names in descending alphabetical order
    const workers = this.state.workers.sort((b, a) => a.name.localeCompare(b.name))
    // Set state to match sorted array
    this.setState({ workers });
  };

  sortOccupationsA = occupation => {
    // Sort worker list by occupations in ascending alphabetical order
    const workers = this.state.workers.sort((a, b) => a.occupation.localeCompare(b.occupation))
    // Set state to match sorted array
    this.setState({ workers });
  };

  sortOccupationsD = occupation => {
    // Sort worker list by occupations in descending alphabetical order
    const workers = this.state.workers.sort((b, a) => a.occupation.localeCompare(b.occupation))
    // Set state to match sorted array
    this.setState({ workers });
  };

  sortPhoneA = phone => {
    // Sort worker list by phone number in ascending order
    const workers = this.state.workers.sort((a, b) => a.phone.localeCompare(b.phone))
    // Set state to match sorted array
    this.setState({ workers });
  };

  sortPhoneD = occupation => {
    // Sort worker list by phone number in descending order
    const workers = this.state.workers.sort((b, a) => a.phone.localeCompare(b.phone))
    // Set state to match sorted array
    this.setState({ workers });
  };

  Accountants = occupation => {
    //Pull in initial workers list
    const intworkers = this.initialstate.workers
    //Filter initial workers list to only include accountants
    const workers = intworkers.filter(worker => (worker.name === ("Angela Martin")||worker.name ===("Kevin Malone")))
    // Set state to match filtered array
    this.setState({ workers });
  };

  SalesPeople = occupation => {
    //Pull in initial workers list
    const intworkers = this.initialstate.workers
    //Filter initial workers list to only include salespeople
    const workers = intworkers.filter(worker => (worker.name === ("Andy Bernard")||worker.name ===("Dwight Schrute")||worker.name ===("Jim Halpert")||worker.name ===("Pam Beesley")||worker.name ===("Ryan Howard")))
    // Set state to match filtered array
    this.setState({ workers });
  };

  Operations = occupation => {
    //Pull in initial workers list    
    const intworkers = this.initialstate.workers
    //Filter initial workers list to only include operations workers
    const workers = intworkers.filter(worker => (worker.name === ("Michael Scott")||worker.name ===("Erin Hannon")||worker.name ===("Pam Beesley")||worker.name ===("Meredith Palmer")||worker.name ===("Toby Flenderson")))
    //Set state to match filtered array
    this.setState({ workers });
  };

  ShowAll = occupation => {
    //Pull in initial workers list   
    const workers = this.initialstate.workers
    //Set state to initial workers list   
    this.setState({ workers });
  };

  render() {
    return (
      //Wrapper
      <Wrapper>
      {/* //Sort Buttons   */}
        <SortNamesA
        sortNamesA={this.sortNamesA}
        />
        <SortNamesD
        sortNamesD={this.sortNamesD}
        />
        <SortOccupationsA
        sortOccupationsA={this.sortOccupationsA}
        />
        <SortOccupationsD
        sortOccupationsD={this.sortOccupationsD}
        />
        <SortPhoneA
        sortPhoneA={this.sortPhoneA}
        />
        <SortPhoneD
        sortPhoneD={this.sortPhoneD}
        />
        {/* //Filter Buttons   */}
        <Accountants
        Accountants={this.Accountants}
        />
        <SalesPeople
        SalesPeople={this.SalesPeople}
        /> 
        <Operations
        Operations={this.Operations}
        />
        <ShowAll
        ShowAll={this.ShowAll}
        />
        {/* //Title Object   */}
        <Title>Worker Directory</Title>
        {this.state.workers.map(worker => (
        // Workers Card
          <WorkerCard
            removeWorker={this.removeWorker}
            id={worker.id}
            key={worker.id}
            name={worker.name}
            image={worker.image}
            occupation={worker.occupation}
            phone={worker.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
