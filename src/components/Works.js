import * as React from "react"
import '../styles/typography.css';
import OneWork from './Onework';
// import Blog from './Blog';
const title = {
  fontFamily: 'BonVivantSerif, serif',
  fontSize: '96px',
  marginBottom: '100px',
  marginTop: '200px',
}
const sectionStyles = {
  width: '80%',
  marginLeft: '10%',
  marginTop: '200px',
}

const links = [
  {
    title: "KRAVEBEAUTY",
    role: "Front End Developer",
    url: "https://kravebeauty.co.kr/",
    description:
      "Beauty products company specilliasing in vegan and organic products",
    tags: ["Client Work", "Front End"],
    image: 'https://user-images.githubusercontent.com/47024219/179133773-c023342b-0c85-4656-bb70-17cafe75df98.png',
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
    image: 'https://user-images.githubusercontent.com/47024219/179134011-f3c9f9c5-b80b-436c-b5e0-0a913bb4a66c.png',
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
    image: 'https://user-images.githubusercontent.com/47024219/179134105-e3131887-a9f5-4e0a-aaeb-03e663e48b98.png',
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
    image: 'https://user-images.githubusercontent.com/47024219/179134243-70af7bfe-7fa3-4a08-adb5-61bb2c4bda62.png',
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
    image: 'https://user-images.githubusercontent.com/47024219/179134379-e117aef2-d988-4d85-83f1-cde9d9f81550.png',
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
    image: '"../images/PHOTO.png"',
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
    image: 'https://user-images.githubusercontent.com/47024219/179134567-d96d97b0-ce43-4017-892e-588598ab4db4.png',
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
    image: 'https://user-images.githubusercontent.com/47024219/179134724-a3b63913-de93-4f4c-9d84-32ba3ca61083.png',
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
    image: 'https://github.com/anapimolodec/portfolio/blob/main/src/components/images/face.png?raw=true',
    technologies: ['React.js', 'Node.js', 'Express', 'Clarifai (API)', 'Tachyons(Toolkit)', 'JS(ES6), HTML5, CSS3'],
    contribution: "A user can register and upload an Image Url Address to detect face or multiple faces on the provided image. The app counts how many times the user detected faces and allows user to sign in any time later and continue using the app. The face detection algorithm is provided by Clarifai REST API.",
    italictext: "Full Front-End, Back-End development, database development, design, and connection to REST API.",
    
  },

]


const Works = () => {
  
  return (
    <section style = {sectionStyles} id ="works"> 
      <h2 style= {title} > Works </h2>
      <ol>
          {links.map((link, index) => (
            <OneWork link = {link} index = {index}/>
            
          ))}
        </ol>

    </section>
    
    );
}

export default Works;
