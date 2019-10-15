import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component  {
  constructor () {
    super();
    this.state = {
      champions: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json')
    .then(response=>response.json())
    .then(championsList=>this.setState({champions : Object.keys(championsList.data).map(key =>{ return championsList.data[key]})}));
  }

  handleChange= e => {
    this.setState({searchField: e.target.value})
  } 




  render() {

    const { champions, searchField } = this.state;
    const filteredChampions = champions.filter(champion => champion.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
      <h1>LoL Champions</h1>
      <SearchBox
      placeholder = 'search champions'
      handleChange= {this.handleChange}

      />        


      <CardList champions={filteredChampions}/>  
      </div>
    )
  }

}



export default App;
