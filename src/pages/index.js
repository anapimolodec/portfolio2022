import React, {useState, useEffect} from "react";
import Works from '../components/Works';
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/styles.css';
// styles

const underline = {
  transition: 'width 0.5s ease-out',
  height: '5px',
  width: '0px',
  position: 'relative',
  left:'3px',
  backgroundColor: 'white',

}
const headingAccentStyles = {
  color: "#663399",
}
const padding = {
  paddingTop: '10vh',
}

const pageStyles = {
  padding: 0,
  margin: 0,
}

// markup
const IndexPage = () => {
  const [mobile, setMobile] = useState();
  useEffect(() => {
    if (window.innerWidth > 767) {
      setMobile(true);
    } else if (window.innerWidth < 767) {
      setMobile(false);
    }
  }, [])
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Navigation mobile={mobile}/>
      <Welcome mobile={mobile}/>
      <Works />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
