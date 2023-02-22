import React from 'react'
import {HashLink as Link} from "react-router-hash-link"
import {motion} from "framer-motion"
import "./homeContent.css"
function HomeContent(props) {
  return (
    <div className='homeContent'>
        <h1>{props.hint}</h1>
        <motion.p 
        initial= {{scale: 0}}
        animate= {{scale: 1}}
        transition= {{duration: 3}} 
        className='title'>{props.title}</motion.p>
        <p className='description'>{props.description}</p>
        <Link to={props.href}>{props.button}
        </Link>
       {/* <a href={props.href}>{props.button}</a> */}
    </div>
  )
}

export default HomeContent