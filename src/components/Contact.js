import * as React from "react"
import '../styles/typography.css';
import Socials from './Socials';
import Letter from './Letter';
import {useStaticQuery, graphql} from 'gatsby'
import '../styles/styles.css';
// import Blog from './Blog';
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
const contactText = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems: 'center',
}
const Contact = () => {
   
  return (
    <section style = {sectionStyles} id ="contactme"> 
      <h2 style= {title} > Contacts </h2>
      <div style={contactText}> 
        <h3 style={{fontSize: '1.2rem', fontWeight: 500}}> Do you want to start a conversation? </h3>
        <p style={{fontStyle: 'italic'}}> I am open to any collaborations and work.  </p>
        <Socials />
        <p style={{marginTop: '30px'}}> click to 
        <a href="https://drive.google.com/uc?export=download&id=1IZ76WgKhaPGUcVvdrBE3doudN_neUGhy" download style={{color:'black',textDecoration: 'none', borderBottom: '5px #7C9ABE solid'}}> download </a>my resume </p>

      </div>
      <Letter />
     

    </section>
    
    );
}

export default Contact;