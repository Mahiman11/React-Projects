import React, { useRef } from 'react'
import './JoinNow.css'
import '../App.css'
import emailjs from '@emailjs/browser'

const JoinNow = () => {

    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1c5sguv', 'template_7jodysc', form.current, {
        publicKey: '9dsW1hmzZBzwY4_gV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="join">
        <div className="l-join">
            <hr />
          <div className="header">
            <span className='t-1'>READY TO</span> LEVEL UP <br />
            YOUR BODY <span  className='t-2'>WITH US ?</span>
          </div>
        </div>


        <div className="r-join">

          <form onSubmit={sendEmail} ref={form} name='user_email' action="">
            <input placeholder='Enter your email here' type="email" />
            <button onClick={sendEmail} id='join-now'>join now</button>
         </form>

        </div>

    </div>
  )
}

export default JoinNow