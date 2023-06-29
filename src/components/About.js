import React  from "react";
import '../styles/styles.css';
import {useStaticQuery, graphql} from 'gatsby'

const title = {
  fontFamily: 'BonVivantSerif, serif',
  fontSize: '96px',
  marginBottom: '100px',
}
const imgStyle = {
	margin: '20px',
	backgroundColor: 'transparent',
}

const imgWrapStyle = {
	margin: '15px',
	padding: '8px',
  backgroundColor: '#C1DCED',
  borderRadius: '50%',
}
const sectionStyles = {
	width: '80%',
  	marginLeft: '10%',
  	marginTop: '200px',
}

const skillWrap = {
	display: 'flex',
	flexWrap: 'wrap',
}

const postWrap = {
	display: 'flex',
	flexDirection: 'column',
	marginRight: '20px',
	marginBottom: '20px',

}
const tagStyle = {
  background: '#D9D9D9',
  borderRadius: '14px',
  padding: '6px 16px',
  marginRight: '15px',
  fontSize: '0.8rem',
}
const aboutText = [
	"My name is Aiaru, and I am a Front End Developer. Thank you for vising my digital portfolio.",
	"I was born and raised in my beautiful Astana, Kazakhstan, where I also got my bachelor's degree in Civil Engineering. Then, changing location and major led me to the world of Web Development.",
	"I am passionate about building neat and modern web applications. Majority of my work is related to Front End development. However, I also learned Full Stack Web Development and currently experimenting with UI UX design.",
	"I am a good team player, a perfect fit for an aspiring tech company. Open to both freelance and full-time work positions.",
	"Currently I am based in Seoul, South Korea. I am a holder of F-2 resident visa, and I am open to any collaborations and projects. "
	]

const posts = [
	{
		title: 'Connecting Tailwind CSS, NextJS, and Storybook',
		date: '20 Feb 2023',
		url: 'https://dev.to/anapimolodec/connecting-tailwind-css-nextjs-and-storybook-2fe9/',
		tag: ['Storybook', 'NextJS', 'TailwindCSS'], 
	},
	{
		title: 'How to make tags in Overleaf',
		date: '28 Jun 2023',
		url: 'https://dev.to/anapimolodec/how-to-make-tags-in-overleaf-33pd/',
		tag: ['Overleaf'],
	},
	{
		title: 'Store Transfer from Cafe24 to Shopify: Part 2',
		date: '15 Apr 2022',
		url: 'https://punchkorea.com/cafe24-to-shopify-address-consent-pg/',
		tag: ['Shopify', 'Data migration'],
	},
	{
		title: 'Store Transfer from Cafe24 to Shopify: Part 1 (Data Transfer)',
		date: '31 Mar 2022',
		url: 'https://punchkorea.com/cafe24-to-shopify-data-transfer/',
		tag: ['Shopify', 'Data migration'],
	},
	{
		title: 'Automate the collection of Naver News articles with keywords in Google Sheets using Python',
		date: '25 June 2021',
		url: 'https://punchkorea.com/automate-naver-news-keywords-sheets/',
		tag: ['Python', 'Google API', 'Web Scraping'],
	},
	{
		title: 'Using PokeAPI to build simple Pokemon Generator',
		date: '27 Dec 2020',
		url: 'https://medium.com/@anapimolodec/using-pokeapi-to-build-simple-pokemon-generator-e63c92bfa0d5',
		tag: ['REST API'],
	},
]

const subTitleStyle = {
	fontFamily: 'BonVivantSerif, serif', 
	fontSize: '2rem', 
	marginTop: '30px', 
	marginBottom: '10px'
}

const divWrap ={
	display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
const About = () => {
	const allImagesQuery = graphql`
    query MyQuery {
	    allFile {
        edges {
          node {
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
    
    } = useStaticQuery(allImagesQuery)

    let tech = []
    let cms = []
    let design = []
    let lang =[]
    let plat = []
    let frame = []
    images.map(image => {
          let dir = image.node.relativeDirectory;
          
          if (dir === "technologies") {
              tech.push(image)
                
            }
          else if (dir === "cms"){
              cms.push(image)
          } else if (dir === "design") {
              design.push(image)
          } else if (dir === "framework") {
          	frame.push(image)
          } else if (dir === "lang") {
          	lang.push(image)
          } else if (dir === "platform") {
          	plat.push(image)
          }
          return;
        });
    	
	return (
		<section style = {sectionStyles} id ="about"> 
	      <h2 style= {title} > About </h2>
	      <div style={{fontSize: '1.2rem', fontWeight: 300, paddingRight: '100px', paddingLeft: '50px'}} className="nopadding">
	      {aboutText.map(sentence => (
	      	<p key={sentence}> {sentence} <br /><br /></p>
          ))}
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> Frameworks </h3>
	      	<div style = {skillWrap}>
	      	{frame.map(image => (
	      		<div style={divWrap}>
		      		<div style={imgWrapStyle} className ="hoverDiv">
		      			<img style = {imgStyle} key = {image.name} src={image.node.publicURL} alt="logo" width="80px" height="80px" className = "skillImg"/>
							</div>
							<p className="hide"> {image.node.name} </p>
						</div>
              )
            )}
            </div>
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> Technologies </h3>
	      	<div style = {skillWrap}>
	      	{tech.map(image => (
	      		<div style={divWrap}>
	      		<div style={imgWrapStyle} className ="hoverDiv">
	      			<img style = {imgStyle} key = {image.name} src={image.node.publicURL} alt="logo" width="80px" height="80px"  className = "skillImg"/>
	      			
						</div>
						<p className="hide"> {image.node.name} </p>
						</div>
              )
            )}
            </div>
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> Languages and not </h3>
	      	<div style = {skillWrap}>
	      	{lang.map(image => (
	      		<div style={divWrap}>
		      		<div style={imgWrapStyle} className ="hoverDiv">
		      			<img style = {imgStyle} key = {image.name} src={image.node.publicURL} alt="logo" width="80px" height="80px" className = "skillImg"/>
							</div>
							<p className="hide"> {image.node.name} </p>
						</div>
              )
            )}
            </div>
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> Design </h3>
	      	<div style = {skillWrap}>
	      	{design.map(image => (
	      		<div style={divWrap}>
		      		<div style={imgWrapStyle} className ="hoverDiv">
		      			<img style = {imgStyle} key = {image.name} src={image.node.publicURL} alt="logo" width="80px" height="80px" className = "skillImg"/>
							</div>
							<p className="hide"> {image.node.name} </p>
						</div>
              )
            )}
            </div>
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> Platforms </h3>
	      	<div style = {skillWrap}>
	      	{plat.map(image => (
	      		<div style={divWrap}>
		      		<div style={imgWrapStyle} className ="hoverDiv">
		      			<img style = {imgStyle} key = {image.name} src={image.node.publicURL} alt="logo" width="80px" height="80px" className = "skillImg"/>
							</div>
							<p className="hide"> {image.node.name} </p>
						</div>
              )
            )}
            </div>
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> CMS </h3>
	      	<div style = {skillWrap}>
	      	{cms.map(image => (
	      		<div style={divWrap}>
		      		<div style={imgWrapStyle} className ="hoverDiv">
		      			<img style = {imgStyle} key = {image.name} src={image.node.publicURL} alt="logo" width="80px" height="80px" className = "skillImg"/>
							</div>
							<p className="hide"> {image.node.name} </p>
						</div>
              )
            )}
            </div>
	      </div>
	      <div>
	      	<h3 style={subTitleStyle}> Posts </h3>
	      	<div style = {skillWrap}>
	      	{posts.map(post => (
	      		<div style={postWrap} className="postWrap">
	      			<h4 style={{fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px'}}><a href={post.url} style={{textDecoration: 'none', color: 'black'}}> {post.title} </a> </h4>
	      			<p>
						{post.tag.map(t => (
							<span style={tagStyle}> {t} </span>
						))} 
						<span style={{fontSize: '0.8rem'}}>  {post.date}</span> </p>
	      			
				</div>
              )
            )}
            </div>
	      </div>

    	</section>
		)

}

export default About;