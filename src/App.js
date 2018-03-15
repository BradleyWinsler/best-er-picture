// Node Modules
import React, { Component } from 'react';
import {database}  from './firebase';
import map from 'lodash/map';
// Components
import {Header} from './Header';
import {Intro} from './Intro';
import {Input} from './Input';
import {Film} from './Film';
// Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: null,
      selectedYear: '',
    }
    this.filmsRef = database.ref('/films');
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.filmsRef.on('value', (snapshot) => {
      this.setState({films: snapshot.val()});
    });  
  }

  handleChange(event) {
    this.setState({selectedYear: event.target.value});
  }

  render() {
    const { films } = this.state;
    return (
      <div className="App">
        <Header />
        <Intro />
        <Input onChange={this.handleChange} />
        <div className="Films-container">
          { 
            map(films, (value, key) => {
              if (value.year === +(this.state.selectedYear)) {
                return <Film key={key} title={value.title} image={value.img} votes={value.votes} winner={value.winner} films={films} path={key} />
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
