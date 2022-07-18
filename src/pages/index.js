import React  from "react";
import Navigation from '../components/Navigation.js';
import Welcome from '../components/Welcome.js';
import About from '../components/About.js';
import Testimonials from '../components/Testimonials.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import '../styles/styles.css';

const pageStyles = {
  padding: 0,
  margin: 0,
}

// markup
const IndexPage = () => {
 
  return (
    <main style={pageStyles}>
      <title> anapimolodec's portfolio</title>
      <Navigation />
      <Welcome />
      
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
