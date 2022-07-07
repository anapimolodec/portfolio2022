import React, {useState} from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import '../styles/styles.css';

const navStyle = {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
}

const menuStyle = {

	position: 'fixed',
	top: 0,
	width: '80%',
	paddingTop: '60px',
	borderBottom: 'solid #7C9ABE 1px',
	listStyleType: 'none',

}

const itemStyle = {
	float: 'right',
}
const blueText = {
	color: '#7c9abe',
}
const aStyle = {
	textDecoration: 'none',
	paddingLeft: '20px',
	fontFamily: 'Roboto, sans-serif',
	fontWeight: 500,
    color: '#7c9abe',

}
const heltevicaLight = {
  fontFamily: 'HelveticaNeueLight, sans-serif',
}
const Navigation = () => {
  return (
  <nav style={navStyle}>
    <ul className="menu" style={menuStyle}>
    	<li className="logo" style={{"float":"left"}}><a href="#about">anapimolodec</a></li>
    	<li className="item" style={itemStyle}><a href="#contactme" style={aStyle}>contact</a><div className="underline"></div></li>
    	<li className="item" style={itemStyle}><a href="#projects" style={aStyle} >works</a><div className="underline"></div></li>
    	<li className="item" style={itemStyle}><a href="#about" style={aStyle} className="blueText">about</a><div className="underline"></div></li>

    </ul>
</nav>
  	);
}

export default Navigation;