import React, {useState} from "react";
import '../styles/styles.css';
import GHIcon from "../images/github.svg";
import LIcon from "../images/linkedin.svg";
import GIcon from "../images/gmail.svg";
const socialStyles = {
	listStyleType: 'none',
	display: 'flex',
	
	width: '240px',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '30px',
}
const Socials = () => {
	return (
		<ul style = {socialStyles}>
			<li> <a href="https://github.com/anapimolodec"> <GHIcon /></a></li>
			<li> <a href="mailto: aiaru.mukhamedyarova@gmail.com"> <GIcon /> </a></li>
			<li> <a href="https://www.linkedin.com/in/aiaru/"> <LIcon /> </a> </li>
		</ul>
		)

}

export default Socials;