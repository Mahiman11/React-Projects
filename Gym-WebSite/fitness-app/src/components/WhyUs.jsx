import React from 'react'
import '../App.css'
import './WhyUs.css'

const WhyUs = () => {
  return (
     <div className="whyus">

        <div className="posters">
            
                <img src="image1.png" alt="" className="po-1" />
                <img src="image2.png" alt="" className="po-2" />
                <img src="image3.png" alt="" className="po-3" />
                <img src="image4.png" alt="" className="po-4" />
        </div>

        <div className="data">
            <span className='sr'>SOME REASONS</span>

            <div className="s-text">
                 <span className='rw'>WHY </span>   CHOOSE US ?
            </div>

            <div className="rsn">

                <div>
                <img src="tick.png" alt="" />
                <span> OVER 140+ EXPERT COACHES</span>
                 </div>

                 <div>
                <img src="tick.png" alt="" />
                <span>TRAIN SMARTER AND FASTER THEN BEFORE</span>
                 </div>

                 <div>
                <img src="tick.png" alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                 </div>

                 <div>
                <img src="tick.png" alt="" />
                <span>RELIABLE PARTNERS</span>
                 </div>

                 <span style={{color: "var(--gray",
                    fontWeight: 'normal'
                 }}>OUR PARTNERS</span>

                 <div className="prtnrs">
                    <img src="nb.png" alt="" />
                    <img src="nike.png" alt="" />
                    <img src="adidas.png" alt="" />
                 </div>

            </div>

        </div>
     </div>
  )
}

export default WhyUs