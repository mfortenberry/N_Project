import React from 'react'
import "./services.css"
import pic1 from "../Images/WhatsAppImage2.jpg"
import ServicesDescription from './ServicesDescription'
import img1 from "../Images/logo.jpg"

function Services() {
  return (
    <div className='services' id="services">
        <div className='servicesTitlewrapper'>
           <h1>Service & Solutions</h1>
        </div>
     
      <div className='servicesFirst'>
      <ServicesDescription 
      img = {img1}
      title = "SOFTWARE DEVELOPMENT"
      descriptionTitle = "SOFTWARE DEVELOPMENT"
      description = 'Providing high-quality software development services is a complex task that requires a deep understanding of the software development lifecycle, programming languages, frameworks, and tools. We provide Front-end Engineers, Back-end Engineers, full-stack Engineers, DevOps engineers, Mobile developers and QA Engineers.'
      />
      <ServicesDescription 
      img = {img1}
      title = "CUSTOMER SERVICE REPRESENTATIVES"
      descriptionTitle = "CUSTOMER SUPPORT REPRESENTATIVES"
      description = 'Staffing customer support representatives is a critical task for any organization that wants to provide excellent customer service. Customer support representatives are responsible for interacting with customers, resolving their issues, and providing them with a positive experience. We train and provide experienced Customer Support Representatives based on client requirements.'
      />
      <ServicesDescription 
      img = {img1}
      title = "MEDICAL BILLING SPECIALISTS"
      descriptionTitle = "MEDICAL BILLING SPECIALIST"
      description = 'Staffing medical billing specialists is an essential task for healthcare organizations that want to ensure timely and accurate reimbursement for medical services. We provide best Medical billing specialists that are responsible for handling billing and coding tasks related to medical procedures, insurance claims, and patient records.'
      />
      {/* <ServicesDescription 
      img = {img1}
      title = "MANAGED SERVICES"
      descriptionTitle = " MANAGED SERVICES"
      description = 'Benefit from a combination of flexible service models, easy-to-integrate solutions and a proactive and affordable approach to maintenance and management to insulate your investments from obsolete operational models'
      /> */}
      </div>     
    </div>
  )
}

export default Services

