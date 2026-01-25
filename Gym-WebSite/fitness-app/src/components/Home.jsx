import React from 'react'
import Nav from './Nav'
import './Home.css'
import '../App.css'
import './Nav.css'

const Home = () => {
  return (
    <div className="home">


      <div className="left-h">

         <Nav/>

         <div className="add">THE BEST GYM IN THE TOWN</div>

         <h1 className='h-heading'><span className='h-heading_1'>SHAPE</span> YOUR <br />
         IDEAL BODY</h1>

         <p className='h-para'>In here we will help you to shape your ideal body and live up <br />
         your life to fullest.</p>

         <div className="n-fig">

          <div className='c-m-f'>
          <div> <span className='numbers' >+ 140</span> <br />
          EXPERT COACHES</div>
          <div> <span className='numbers'>+ 978</span> <br />
          MEMBERS JOINED</div>
          <div> <span className='numbers'>+ 50</span> <br />
          FITNESS PROGRAMS</div>
          </div>

          <div className="calories">
            <div className="c-image">
             <img src="calories.png" alt="" />
             </div>

             <div className="c-texts">
             <span className='c-text'>Calories Burned</span>
             220 kcal
             </div>
          </div>

         </div>

         <div className="h-bttns">
          <button className="start-b" type="button">Get Started</button>
          <button className="learn-b" type="button">Learn More</button>
          
         </div>

       </div>

     <div className="right-h">
          
          <div className="join-now_h"><button className='r-h_button'>JOIN NOW</button></div>

          <div className="right-one">
            <img src="heart.png" alt="" />
            <span className='h-rate'>Heart Rate</span> <br />
             116 bpm
          </div>

          <div className="h-banner">
            <img src="hero_image.png" alt="" />
          </div>

     </div>

      </div>
  )
}

export default Home