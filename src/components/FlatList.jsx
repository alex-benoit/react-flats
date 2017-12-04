import React from 'react';
import Flat from './Flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat) => {
        return (
          <Flat
            flat={flat}
            selected={flat === props.selectedFlat}
            changeSelectedFlat={props.changeSelectedFlat}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
