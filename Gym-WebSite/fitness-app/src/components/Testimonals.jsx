import React from 'react'
import { useState } from 'react'
import '../App.css'
import './Testimonals.css'
import { testimonialsData } from '../data/testimonialsData'

const Testimonals = () => {

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className='ts-container'>
        
        <div className="t-left">
          <span className='t-name'>TESTIMONIALS</span>
          <span className='th-text1'>WHAT THEY</span> 
          <span>SAY ABOUT US</span>  

          <span>
            {testimonialsData[selected].review}
          </span>
          <span>
           <span style={{ color: 'orange'}}> 
            {testimonialsData[selected].name}
           </span>{" "}
             - {testimonialsData[selected].status}
          </span>
        </div>

        <div className="t-right">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} id='imgs' alt="" />

           <div className="arrows">

            <img onClick={() => {
              selected===0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src="leftArrow.png"
            alt="" />

            <img onClick={() => {
              selected=== tLength - 1
                ? setSelected[0]
                : setSelected((prev) => prev + 1);
            }}
             src="rightArrow.png"
             alt="" />

           </div>

        </div>

        
    </div>
  )
}

export default Testimonals