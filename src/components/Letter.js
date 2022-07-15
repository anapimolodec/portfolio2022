import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Clip from '../images/clip.svg';
const letterStyle = {
  width:'100%',
  display: 'flex',
  justifyContent:'center',
  marginTop: '100px',
  flexDirection: 'column',
  textAlign: 'center',
  

}
const clipStyle ={
  width:'50px',
  height: '50px', 
  backgroundColor: 'transparent',
  transform: 'rotate(-45deg)',
  position: 'relative',
  top: '-75px',
  left: '45%',
}
const formStyle= {
  backgroundColor: '#D9D9D9',
  margin: '100px',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems: 'center',

}

const Letter = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service2022', 'email_template', form.current, 'user_DlmP2OeiIMsQmVQnm9nYe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    setSent(true);
  };

  return (
    <div style={letterStyle}>

      <form ref={form} onSubmit={sendEmail} style={formStyle} className="nomargin">
      <Clip style={clipStyle}/>
        <p> Hello! </p> <br />
        <p><label>My name: </label> <input type="text" name="user_name" /></p>
        
        <p><label> My email: </label><input type="email" name="user_email" /></p> <br />
        <p><label> My message is below. </label> <br />
        <textarea name="message" /></p>
        <br />
        <p> Btw liked your portfolio! </p>
        <button type="submit" className = "button" style={{marginTop: '80px'}}>
         {sent ? <span style={{fontFamily: 'Roboto,serif'}}> sent &#x2705; </span> : <span style={{fontFamily: 'Roboto,serif'}}> send </span>} </button>
      </form>
       
    </div>
    
  );
};

export default Letter;