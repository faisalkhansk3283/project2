import React, { useState } from 'react';
import './EventCard.css';

const EventCard = (props) => {
  const { question, answer, showAnswer, onCardClick } = props;

  return (
    <div className={`card-details ${showAnswer ? 'flipped' : ''}`} onClick={onCardClick}>
      <div className="card-inner">
        <div className="card-question" style={{ display: showAnswer ? 'none' : 'block' }}>
          <p>{question}</p>
        </div>
        <div className="card-answer" style={{ display: showAnswer ? 'block' : 'none' }}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;