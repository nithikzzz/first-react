import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import React from 'react'
import { faAngular, faCss3, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
          <h1>
            <AnimatedLetters
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
            />
          </h1>
          <p>Hi, I'm a student and a web developer with a passion for creating visually appealing and functional websites. 
             I have experience in using HTML, CSS, and JavaScript to build responsive web pages that look great on all devices.
             I am constantly learning and improving my skills to keep up with the latest trends in the industry.</p>
          <p>In addition to HTML, CSS, and JavaScript, a full-stack web developer needs to have knowledge of other programming languages, databases, and frameworks. 
             They should also be able to quickly learn new technologies as they emerge. Becoming a full-stack developer takes time and effort,
             but it can be a rewarding career path for those who are passionate about web development.</p>
          <p>I believe that a strong web developer portfolio is essential when applying for jobs or projects in any web development company.
             It not only showcases your programming skills but also provides a chance to display your creativity.
             I have taken inspiration from various web developer portfolios, including those of seasoned developers,
             to create my own unique portfolio that highlights my skills and experience.</p>

      </div>
     
    <div className='stage-cube-const'>
      <div className='cubespinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={faHtml5} color='#F06529' />
         </div>
         <div className='face2'>
          <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
         </div>
         <div className='face3'>
          <FontAwesomeIcon icon={faJs} color='#f0db4f' />
         </div>
         <div className='face4'>
          <FontAwesomeIcon icon={faJava} color='#5382a1' />
         </div>
         <div className='face5'>
          <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
         </div>
         <div className='face6'>
          <FontAwesomeIcon icon={faAngular} color='#DD0031' />
         </div>
      </div>
    </div>


    </div>
  )
}

export default About