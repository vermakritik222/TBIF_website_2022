import React from 'react';
import './HeadLine.css';

function HeadLine() {
  return (
    <>
        <div className="headline-container"> 
            <div className="headline-text"> 
              <p id = "movingText">
                  News:  &nbsp; <a href="/">Click here for details.</a> 
              </p>
            </div>
        </div>
    </>
  )
}

export default HeadLine