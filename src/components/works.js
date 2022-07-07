import * as React from "react"
import '../styles/typography.css';


const wtitle = {
  fontFamily: 'BonVivantSerif, serif',
  fontSize: '96px',
  marginBottom: '100px',
}




const links = [
  {
    title: "KRAVEBEAUTY",
    role: "Front End Developer",
    url: "https://kravebeauty.co.kr/",
    description:
      "Beauty products company specilliasing in vegan and organic products",
    tags: ["Client Work", "Front End"],
    technologies: ["Shopify (platform)", "Liquid", "JS(ES6), HTML5, CSS3", "AWS instance", "WHOIS domain"],
    contribution: "Using client’s Figma Design files, worked on the design and functionality of specific pages and components. Integrated Shopify store with third party delivery and shopping apps. Worked on data transfer as a part of full data migration between different platforms. Created and managed AWS ec2 instance as a server for the application code. Installed SSL and deployed application code to the running server. ",
    italictext: "Navigation Bar, Registration & Login, Cart, Product Pages, Products Grid, Footer, Checkout Page.",
  },
  {
    title: "T1",
    role: "Front End Developer",
    url: "https://shop-t1.gg/",
    description:
      "Cyber Sport Company’s online shopping store for selling customizable merch products. ",
    tags: ["Client Work", "Front End"],
    technologies: ["Shopify (platform)", "Liquid", "JS(ES6), HTML5, CSS3"],
    contribution: "Modified and customized components and pages of the store. Worked on adding customization options to products such as adding customer’s name on T-shirt and displaying such changes on the product page. ",
    italictext: "Product Pages, Products Grid, Custom Pop-ups, Cart Page.",
    
  },
  {
    title: "thisisneverthat",
    role: "Developer",
    url: "https://thisisneverthat.com/",
    description:
      "Contemporary fashion brand’s online store.",
    tags: ["Client Work", "Back End"],
    technologies: ["Shopify (platform)", "Liquid", "JS(ES6), HTML5, CSS3", "Kakao API", "Naver API"],
    contribution: "Worked on integration of the third party payment systems (Kakao and Naver Pay) into the Shopify-based store.",
    italictext: "Checkout Page, Cart Page",
    
  },
   {
    title: "L’atelier des Parfums",
    role: "Front End Developer",
    url: "https://ldp.co.kr/",
    description:
      "Luxury perfum online store.",
    tags: ["Client Work", "Front End"],
    technologies: ["Shopify (platform)", "Liquid", "JS(ES6), HTML5, CSS3"],
    contribution: "Modified and customized components and pages of the store. Worked on data storage of the customers upon registration to the website.",
    italictext: "Registration Page, Products Page, Checkout Page, Cart Page. ",
    
  },
   {
    title: "Photographer’s Personal Portfolio",
    role: "Developer",
    url: "https://akma.gatsbyjs.io/",
    description:
      "Personal Portfolio of an aspiring photographer",
    tags: ["Freelance", "Front End", "UI UX Design"],
    technologies: ['GatsbyJS', 'Figma', 'JS(ES6), HTML5, CSS3'],
    contribution: "Prepared UI UX design in Figma and coded static personal portfolio website for a client. Client is a photographer, so speed of loading images was crucial. For optimal speed, Gatsby JS was used as a framework and deployment.",
    italictext: "Designed, coded and deployed.",
    
  },
  {
    title: "Automation of news articles collection",
    role: "Python Developer",
    url: '',
    description:
      "Personal Portfolio of an aspiring photographer",
    tags: ["Freelance", "Front End", "UI UX Design"],
    technologies: ['Python', 'Libraries (Pandas, BeautifulSoup)', 'Google Drive API', 'Goole Spreadsheets API'],
    contribution: "Worked on automation of collection of news articles from a website and storing them in easy-to-read way for the marketing team.",
    italictext: "Coded and installed on live server for daily run.",
    
  },
  {
    title: "Landing Page for a Course",
    role: "Designer",
    url: '',
    description:
      "Landing page for life coach and her course. ",
    tags: ["Freelance", "UI UX Design"],
    technologies: ['Figma'],
    contribution: "Designed landing page for a life coach’s course. Based on course content and potential audience, designed easy-to-read website frames.",
    italictext: "Provided full design on Figma",
    
  },
  {
    title: "Portfolio for a Developer",
    role: "Designer",
    url: '',
    description:
      "Personal portfolio for a back-end developer.",
    tags: ["Freelance", "UI UX Design"],
    technologies: ['Figma'],
    contribution: "Designed personal portfolio for a back-end developer, focusing on highligthing developer's skills.",
    italictext: "Provided full design on Figma",
    
  },
  {
    title: "Try Find Face",
    role: "Full Stack Developer",
    url: 'https://try-find-face.herokuapp.com/',
    description:
      "Application which is built to implement AI Face Detection service into a simple application.",
    tags: ["Project", "Full Stack"],
    technologies: ['React.js', 'Node.js', 'Express', 'Clarifai (API)', 'Tachyons(Toolkit)', 'JS(ES6), HTML5, CSS3'],
    contribution: "A user can register and upload an Image Url Address to detect face or multiple faces on the provided image. The app counts how many times the user detected faces and allows user to sign in any time later and continue using the app. The face detection algorithm is provided by Clarifai REST API.",
    italictext: "Full Front-End, Back-End development, database development, design, and connection to REST API.",
    
  },

]
const workStyles = {
  width: '80%',
  marginLeft: '10%',
}

const oneWork = {
  width: '100%',
  display: 'flex',
}

const indexStyle = {
  fontSize: '96px',
  fontFamily: 'BonVivantSerif, serif',
  width: '10%',
  borderRight: 'solid #e7b9aa 1px',
}

const lineStyle = {
  display: 'flex',
  width: '100%',
  paddingBottom: '10px',
}

const tagStyle = {
  background: '#E7B9AA',
  borderRadius: '14px',
  padding: '6px 16px',
  marginRight: '15px',
  fontSize: '0.8rem',
}

const desc1 = {
  paddingTop: '35px',
  borderBottom: 'solid #e7b9aa 1px',
  
}

const desc2 = {
  paddingTop: '35px',
  
}
const Works = () => {
  
  return (
    <section style = {workStyles}> 
    <h2 style= {wtitle} > Works </h2>
    <ol>
          {links.map((link, index) => (

            <li key={link.url} style={oneWork}>
              <div style ={indexStyle}> 0{index+1} </div>
              <div style = {{width: '500px', marginLeft: '100px'}}> 
                  
                
                  <h2 style={{fontFamily: 'BonVivantSerif, serif', fontSize: '2rem', marginTop: '20px'}}> {link.title} </h2>
                  <div style={desc1} > 

                    <div style={lineStyle}> <div style= {{width: '30%', fontWeight: 500, color: '#787878'}}> Role </div> <div style= {{width: '70%'}}> {link.role} </div> </div>
                    {
                      link.url ? (
                        <div style={lineStyle}> <div style= {{width: '30%', fontWeight: 500, color: '#787878'}}> URL </div> <div style= {{width: '70%'}}> <a href={link.url}> {link.url}</a></div> </div>
                      ) : ("")
                    }
                    <div style={lineStyle}> <div style= {{width: '30%', fontWeight: 500, color: '#787878'}}> Description </div> 
                      <div style= {{width: '70%'}}>  {link.description} 
                      <div style={{marginTop: "20px", paddingBottom: "50px"}}> {link.tags.map(tag => 
                        <span key ={tag} style={tagStyle}> {tag} </span>
                        )} </div>
                      </div> 
                    </div>
                    
                  </div>
                  <div style={desc2}>
                    <div style= {{fontWeight: 500, color: '#787878', paddingBottom: '10px'}}> Technologies </div> 
                    <div style= {{}}> {link.technologies.map(tech => (
                        <p key={tech}> {tech} </p>
                      ))} </div> <br />
                    <div style= {{fontWeight: 500, color: '#787878', paddingBottom: '10px'}}> My Contribution </div> 
                    <div style= {{}}> {link.contribution} </div> <br />
                    <div style= {{fontStyle: 'italic', fontWeight: 400}}> {link.italictext} </div>
                  </div>


              </div>
            </li>
          ))}
        </ol>
    </section>
    
    );
}

export default Works;
