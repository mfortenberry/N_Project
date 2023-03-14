import React from 'react'
import "./about.css"
import {motion} from "framer-motion"
import image1 from "../Images/WhatsApp Image3.jpg"
function About() {
  return (
    <div className='about' id="about" style={{paddingTop:"80px"}}>
        <div className='aboutContainer' >
        <h1>What Makes Us</h1>
        <p className='title'>Different?</p>
        <div className='aboutDescription'>
        <p>Our unwavering commitment to customer satisfaction. We believe that every customer deserves the highest level of service and attention, and we go above and beyond to ensure that their needs are met. Our team is comprised of experts in their respective fields who are dedicated to delivering exceptional results. We also invest in the latest technologies and innovations to stay ahead of the curve and provide our customers with the best possible solutions. At our core, we believe that our success is measured by the success of our clients, and we strive to build long-lasting partnerships based on mutual trust and respect.</p>
        </div>
        </div>
        <div className='aboutImage'>
        {/* <motion.img src={image1} alt="" 
          whileHover={{scale: 1.1, y: 0}}/> */}
        </div>
        
    </div>
  )
}

export default About