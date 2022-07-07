import * as React from "react"
import Works from '../components/Works';
import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';

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
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Navigation />
      <Welcome />
      <Works />

    </main>
  )
}

export default IndexPage
