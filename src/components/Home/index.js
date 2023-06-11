import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

function Home () {

  useEffect(()=>{
    setTimeout(()=>{
    setLetterClass('text-animate-hover')
      },4000)
      },[])

  const [ letterClass , setLetterClass ]=useState('text-animate')
  const nameArray = [' ','.',' N','i','t','h','i','y','a',' ','p','r','i','y','a']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']


  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass}_12`}>i!</span>
               <br/> 
               <span className={`${letterClass}_13`}>I</span>
               <span className={`${letterClass}_14`}>'m</span>
            <img src={LogoTitle  } alt='developer' />
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={jobArray}
            idx={20} />
           
            </h1>
            <h2>Frontend Developer / JavaScript / java  </h2>  <p> 🌚-ū:æ_æ+🌝🌚īlœ:ē-œū🌝 </p>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
              
  ) 
}

export default Home 