import React from 'react'
import '../App.css'
import './Nav.css'
import { programsData } from '../data/programsData';


const Programs = () => {
  return (
    <div className="programs">

        <div className="p-heading">
            <span className='ph-1'>EXPLORE OUR</span>
            <span className='ph-2'>PROGRAMS</span >
            <span className='ph-3'>TO SHAPE YOU</span>
        </div>

        <div className="p-categories">
           {programsData.map((program) =>(
            <div className="category">{program.image}
            <span>{program.heading}</span><span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src="rightArrow.png" alt="" /></div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Programs