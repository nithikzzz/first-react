import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

import React, { useRef } from 'react'

function Contact() {

  const form = useRef()

 const sendEmail = (e) =>{
    e.preventDefault()
    emailjs
    .sendForm(
      'gmail',
      'template_xwg9kod',
      form.current,
      'mK50MHcnMmz9wLIy0lEPL'
      )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () =>{
        alert('Failed to send the message , please try again ! ')
      }
    )
  }

  return (
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
            <AnimatedLetters
            strArray={['C','o','n','t','a','c','t',' ','m','e']}
            idx={15} />
            </h1>
            <p>As a student and web developer, I am always looking for new opportunities to showcase my skills and experience.
                 If you are interested in working with me or have any questions,
                 please don't hesitate to reach out.
            </p>
              <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail} >
                  <ul>
                    <li className='half'>
                      <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                      <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                      <input type='text' name='subject' placeholder='Subject' required />
                    </li>  
                    <li>
                    <textarea  name='message' placeholder='Message' required > </textarea>
                    </li>
                    <li>
                      <input type='submit' className='flat-button' value='SEND' />
                    </li>
                  </ul>
                </form>
              </div>
          </div>
        </div>
  )
}
export default Contact;