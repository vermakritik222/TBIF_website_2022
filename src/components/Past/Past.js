import React from 'react'
import "./Past.css"

function Past(props) {
    const{ img, name, description, contact, web}=props;
  return (
    <div className='contain'>
        <div>
            <div className='b1'>
            <div className='img'>
                <img scr={img} alt="company"></img>
            </div>  
            </div>
            <div className='b2'>
            <div className='txt'>
                <div className='t1'>
                    <h4>{name}</h4>
                </div>
                <br></br>
                <div className='t2'>
                    <p>{description}</p>
                </div>
                <div className='t3'>
                    <p>{contact}</p>
                </div>
                <div className='button'>
                    <a href={web}>Visit Website</a>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Past