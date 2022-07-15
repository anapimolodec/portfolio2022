import React  from "react";
import Works from '../components/Works';
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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
      <Works />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
