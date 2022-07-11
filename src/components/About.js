import React, {useState} from "react";
import '../styles/styles.css';
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
const aboutText = [
	"My name is Aiaru, and I am a Front End Developer. Thank you for vising my digital portfolio.",
	"I was born and raised in my beautiful Astana, Kazakhstan, where I also got my bachelor's degree in Civil Engineering. Then, changing location and major led me to the world of Web Development.",
	"I am passionate about building neat and modern web applications. Majority of my work is related to Front End development. However, I also learned Full Stack Web Development and currently experimenting with UI UX design.",
	"I am a good team player, a perfect fit for an aspiring tech company. Open to both freelance and full-time work positions.",
	"Currently I am based in Seoul, South Korea. I am open to any collaborations and projects. "
	]
const About = () => {
	const allImagesQuery = graphql`
    query MyQuery {
		site {
		    siteMetadata {
		      siteUrl
		    }
		  }
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)|(svg)/"}}) {
        edges {
          node {
            base
            size
            childImageSharp {
              gatsbyImageData
            }
            name
            relativeDirectory
            extension
            publicURL
          }
        }
      }
    }`
    const {
    allFile: { edges: images },
    site: {siteMetadata : {siteUrl: URL}},
    } = useStaticQuery(allImagesQuery)

    let tech = []
    let cms = []
    let design = []
    images.map(image => {
          let dir = image.node.relativeDirectory;
          console.log(URL+image.node.publicURL)
          if (dir === "technologies") {
              tech.push(image)
                
            }
          else if (dir === "cms"){
              cms.push(image)
          } else if (dir === "design") {
              design.push(image)
          } 
          return;
        });
    	console.log(tech, cms, design)
	return (
		<section style = {sectionStyles} id ="about"> 
	      <h2 style= {title} > About </h2>
	      <div style={{fontSize: '1.5rem', fontWeight: 300, paddingRight: '100px', paddingLeft: '50px'}}>
	      {aboutText.map(sentence => (
	      	<p key={sentence}> {sentence} <br /><br /></p>
          ))}
	      </div>
	      <div>
	      	<h3 style={{fontFamily: 'BonVivantSerif, serif', fontSize: '2rem', marginTop: '20px', }}> Technologies </h3>
	      	{tech.map(image => (
	      		<img key = {image.name} src={URL+image.node.publicURL} alt="logo" width="100px" height="100px"/>
				  
              )
            )}
	      </div>
    	</section>
		)

}

export default About;