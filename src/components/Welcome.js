import React, {useState} from "react";
import '../styles/styles.css';
import Socials from './Socials';
import Circle from "../images/circle.svg";
const welcomeStyles = {
	paddingTop: '10vh',
	width: '100%',
	height: '90vh',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
}
const header = {
  fontFamily: 'BonVivantSerif, serif',
  fontSize: '96px',
}

const pStyles = {
	fontSize: '1.5rem',
	fontWeight: 100,
}

const circleStyles = {
	float: 'right',
	backgroundColor: 'transparent',
}
const Welcome = () => {
  return (
  <section style={welcomeStyles}>
  	<div style={{width: '50%'}}> 
  		<Circle style={circleStyles} className="rotating"/>
  	</div>
  	<div style={{width: '50%'}}> 
    <h1 style={header}> Hey, </h1>
	    <p style={pStyles}> welcome to my personal portfolio
	    <br /> <br /> <br />
	    I am <strong> Aiaru</strong>, a Front End developer. 
	    <br />
	    I can create a neat and modern website for you.
	    </p>
	    <button className = "button"> contact me </button>
	    <Socials />
    </div>
	</section>
  	);
}

export default Welcome;