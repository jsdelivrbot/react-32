import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ['galaxies', 'aurora', 'oriens-belt'],
      currentIndex: 0
    };
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div className="slider">
        <Slide />

        <LeftArrow 
          goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow 
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}