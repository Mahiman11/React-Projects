import React from 'react'
import '../App.css'
import './Plans.css'
import { plansData } from '../data/PlansData'

const Plans = () => {
  return (
     <div className='plan-container'>

        <div className="pl-heading">
            <span className='h-text1'>READY TO START  </span>
            <span> YOUR JOURNEY </span>
            <span className='h-text3'>NOW WITH US</span>
        </div>

     <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>

            <span>{plan.icon}</span>
            <span className='name'>{plan.name}
            </span><span className='prc'>$ {plan.price}</span>

          <div className="ftrs">
            {plan.features.map((feature, i) => (
                <div className="ftr" key={i}>
                    <img src="whiteTick.png" alt="" />
                    <span>{feature}</span>
                </div>
            ))}
          </div>

          <div className="benefits">
          <span>show more benefits <img src="rightArrow.png" alt="" /> </span>
          </div>

          <button>JOIN NOW</button>

          </div>
         ))}
     </div>
     </div>
  )
}

export default Plans