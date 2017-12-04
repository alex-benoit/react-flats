import React, { Component } from 'react';

class Flat extends Component {
  // static cardStyle = {
  //   backgroundImage: `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.imageUrl}';);`
  // }

  // constructor(props) {
  //   super(props)
  // }

  handleClick = () => {
    this.props.changeSelectedFlat(this.props.flat);
  }

  render() {
    return (
      <div
        className={this.props.selected ? 'active card' : 'card'}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')` }}
        onClick={this.handleClick}
      >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
