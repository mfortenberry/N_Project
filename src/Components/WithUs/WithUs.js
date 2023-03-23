import React from 'react'
import img from "../Images/managed-services.svg"
import image1 from "../Images/WhatsApp Image3.jpg"
import "./withUs.css"


function WithUs() {
  return (
  <div className='withUs' id="withus">
    <h1>What You Get From Us</h1>
    <div className='withUsall'>
    <div className='withUsContainer'>
    <div className='withUsDescWrapper'>
    {/* <img src={img} alt="" /> */}
    <p className='withUsTitle'>Talented and Experienced Professionals</p>
    <p className='withUsDescription'>We provide talented and experienced professionals. These professionals have a combination of natural aptitude, formal education, and practical experience. They have a deep understanding of programming languages, databases, software design principles, and system architecture.</p> 
    </div>
    <div className='withUsDescWrapper'>
    {/* <img src={img} alt="" /> */}
    <p className='withUsTitle'>Cost-effectiveness</p>
    <p className='withUsDescription'>IT outsourcing with remote teams can be cost-effective for businesses, as it eliminates the need for them to invest in expensive infrastructure, equipment, and office space. Remote teams can also help businesses save on overhead costs such as employee benefits, payroll taxes, and training expenses.</p> 
    </div>
    </div>
    <div className='withUsContainer'>
    <div className='withUsDescWrapper'>
    {/* <img src={img} alt="" /> */}
    <p className='withUsTitle'>Access to a global talent pool</p>
    <p className='withUsDescription'>IT outsourcing with remote teams provides businesses with access to a vast pool of IT professionals from all over the world. This allows businesses to tap into specialized skills and expertise that may not be available locally, enabling them to innovate and grow more quickly.</p>
     
    </div>
    <div className='withUsDescWrapper'>
    {/* <img src={img} alt="" /> */}
    <p className='withUsTitle'>Flexibility and Scalability</p>
    <p className='withUsDescription'>IT outsourcing with remote teams provides businesses with flexible staffing solutions that allow them to scale up or down their IT workforce as needed. This can be particularly beneficial for businesses with fluctuating demand or short-term projects.</p>
    </div>
    </div>
    <div className='withUsImage'>
    {/* <img src={image1} alt="" /> */}
    </div>
    </div>
  </div>
    
  )
}

export default WithUs