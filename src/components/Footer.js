import React from "react";
import Socials from './Socials';

const footerMain = {
  width: '80%',
    marginLeft: '10%',
  height: '100px',
  position: 'relative',
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px',

}

const Footer = () => {
  return (
  	<div style={footerMain}>
  		
  		<h3 style={{marginRight: '50px', paddingLeft:'100px', marginTop: '30px'}}> Personal Portfolio of Aiaru Mukhamedyarova. <br />All right reserved. 2022.</h3>
  		
  		<div style={{paddingRight: '100px'}}> <Socials  /></div>
  	</div>
  	);
}

export default Footer;