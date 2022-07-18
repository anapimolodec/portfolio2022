import React  from "react";
import WorksComponent from '../components/WorksComponent.js';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import '../styles/styles.css';

const pageStyles = {
  padding: 0,
  margin: 0,
}

// markup
const works = () => {
 
  return (
    <main style={pageStyles}>
      <title> works </title>
      <Navigation />
      <WorksComponent />
      <Footer />
    </main>
  )
}

export default works
