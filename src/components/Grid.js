import React, { Component } from 'react';
import DescBox from './DescBox';
import LeftArrow from './Controls/LeftArrow';
import RightArrow from './Controls/RightArrow';
import DateSlots from './DateSlots/DateSlots';

class Grid extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid">
          <DescBox />
          <LeftArrow />
          <RightArrow />
          <DateSlots />
        </div>
      </div>
    );
  }
}

export default Grid;
