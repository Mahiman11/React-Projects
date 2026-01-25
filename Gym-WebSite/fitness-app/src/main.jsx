import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import Plans from './components/Plans'
import Testimonals from './components/Testimonals'
import JoinNow from './components/JoinNow'
//import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Home/>
    <Programs/>
    <WhyUs/>
    <Plans/>
    <Testimonals/>
    <JoinNow/>
  
  </StrictMode>
)
