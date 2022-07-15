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
  	<div style={footerMain} className="footer">
  		<p> Personal Portfolio of Aiaru Mukhamedyarova. <br />All right reserved. 2022.</p>
  		<div className= "footer-socials"> <Socials  /></div>
  	</div>
  	);
}

export default Footer;