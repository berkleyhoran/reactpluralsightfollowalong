import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house'
import HouseFilter from './house-filter'

class App extends Component {

  state = {}

  componentDidMount(){
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
    })

  determineFeaturedHouse = () => {
    //algorithm to determine the featured house
    this.setState({ featuredhouses })
  }

  determineUniqueCountries = () => {
    //algorithm for finding unique countries
    this.setState({ countries })
  }

  filterHouses = (country) => {
    //algorithm for filtering houses
    this.setState({ filterHouses })
    this.setState({ country })
  }
  }
  render() {
    return (
      <div className="container">
        <Header subtitle='Providing Houses' />
        <FeaturedHouse house={this.state.featuredhouses} />
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
      </div>
    );
  }
}

export default App;
