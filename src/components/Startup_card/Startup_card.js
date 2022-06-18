import React from 'react';

import './Startup_card.css';

function Startup_card(props) {
  const {img, Name, text, number}=props;

  return (
    <>
        <div className="card-container">
          <img className="card-image" src={img} alt={Name} />
          <div className="card-number">{number}</div>
          <div className="card-text">{text}</div>
        </div>
    </>
  );
}


export default Startup_card