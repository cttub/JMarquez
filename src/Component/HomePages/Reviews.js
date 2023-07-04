import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
const reviews = [
  {
    name: "Evelyn Nunez",
    review: "Helped my family out a lot when everyone else let us down, Called them once and they came through and did the work we needed very fast and excellent  definitely will hit them up for more work"
  },
  {
    name: "Gloria Rodriguez",
    review: "Definitely do recommend them. respectful and honest people. his work was swift.. I'll blow them up to call."
  },
];

class Reviews extends Component {
    
  state = {
    currentReviewIndex: 0
  };

  goToPreviousReview = () => {
    this.setState(prevState => {
      let newIndex = prevState.currentReviewIndex - 1;
      if (newIndex < 0) {
        newIndex = reviews.length - 1;
      }
      return {
        currentReviewIndex: newIndex
      };
    });
  };

  goToNextReview = () => {
    this.setState(prevState => {
      let newIndex = prevState.currentReviewIndex + 1;
      if (newIndex >= reviews.length) {
        newIndex = 0;
      }
      return {
        currentReviewIndex: newIndex
      };
    });
  };

  renderReviews() {
    const { currentReviewIndex } = this.state;
    const review = reviews[currentReviewIndex];

    return (
      <section className='col-lg-7'>
        <h2 style={{ color: "white" }}>{review.name}</h2>
        <p style={{ color: "white" }}>"{review.review}"</p>
      </section>
    );
  }

  render() {
    return (
      <div id='reviews'>
        <button className="arrow-button" onClick={this.goToPreviousReview}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {this.renderReviews()}
        <button className="arrow-button" onClick={this.goToNextReview}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
}

export default Reviews;
