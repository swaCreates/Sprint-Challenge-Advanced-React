import React, {Component} from 'react';
import './App.scss';
import PlayerCard from './PlayerCard';

import axios from 'axios';
import NavBar from './NavBar';

class App extends Component {
  constructor(){
    super();
    this.state= {
      players: [],
    };
  }

  componentDidMount(){
    axios
     .get(`http://localhost:5000/api/players`)
     .then(res => {
      //  console.log(res.data);
       this.setState({players: res.data});
     })
     .catch(err => console.log(`This is my error: `, err));
  } 

  render(){
    return(
      <div className="App">
        <NavBar />
        <h1>Women's World Cup Players</h1>
        <PlayerCard data={this.state.players} />
      </div>
    )
  }
}

export default App;
