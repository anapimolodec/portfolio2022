import * as React from "react"
import '../styles/typography.css';
import TrustSlider from './TrustSlider';
import Q1 from '../images/quote1.svg';
import Q2 from '../images/quote2.svg';
const title = {
  fontFamily: 'BonVivantSerif, serif',
  fontSize: '96px',
  marginBottom: '100px',
}
const sectionStyles = {
  width: '80%',
  marginLeft: '10%',
  marginTop: '200px',
}
const numberGrid = {
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '50px',
}
const numberBox = {
	width: '220px',
	height: '190px',
	background:'#F7FAFC',
	borderRadius: '50px',
	display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const number = {
	fontFamily: 'BonVivantSerif, serif', 
	fontSize: '7rem', 
	backgroundColor:'transparent',
	color: '#7C9ABE',
}

const company = {
	fontSize: '1rem',
	backgroundColor: 'transparent',
	width: '80%',
    textAlign: 'center',
    position: 'relative',
    top: '-20px',
}


const Testimonials = () => {
  
  return (
    <section style = {sectionStyles}> 
      <h2 style= {title} > Testimonials </h2>
      <p style= {{fontWeight: 500, color: '#7C9ABE', textAlign: 'center', fontSize: '1.2rem'}}> I worked as a Front End Developer in digital marketing company, where we used to work with different kinds of client companies. </p>
     <div style = {numberGrid}>
     	<div style={numberBox}>
     		<p style={number}> 4 </p>
     		<p style= {company}> fashion and beauty companies </p>
     	</div>
     	<div style={numberBox}>
     		<p style={number}> 1 </p>
     		<p style= {company}> gaming industry company </p>
     	</div>
     	<div style={numberBox}>
     		<p style={number}> 3 </p>
     		<p style= {company}> personal portfolio </p>
     	</div>
     	<div style={numberBox}>
     		<p style={number}> 1 </p>
     		<p style= {company}> tech industry company </p>
     	</div>
     </div>
     <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '100px'}}>
     	<Q2 />
     	<TrustSlider />
     	<Q1 style={{position:'relative', top: '220px'}}/> 
     </div>
     
    </section>
    
    );
}

export default Testimonials;