import React, { Component } from 'react';
import FlatList from './FlatList';
import Map from './Map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  changeSelectedFlat = (newFlat) => {
    this.setState({
      selectedFlat: newFlat
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            changeSelectedFlat={this.changeSelectedFlat}
          />
          <div className="map-container">
            <Map selectedFlat={this.state.selectedFlat} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
