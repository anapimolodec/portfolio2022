import * as React from "react"
import '../styles/typography.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const word ={

  backgroundColor: '#F7FAFC',
  borderRadius: '50px',
  margin: '70px',
  display: 'flex',
  alignItems: 'center',

}

const quotes = [
  {
    text: "I  truly appreciated working with Aiaru and wish her the very best wherever she decides to go. She was an important member of our team, helping us with our client's projects and I believe she will do more great things!",
    author: 'JK  Song',
    position: 'CEO of Punch Digital Marketing',
  },
  {
    text: 'I contacted Aiaru for a portfolio.  She did exactly what I wanted.  Everything was professional.  The site is very fast.  The design is very modern and minimalist, just like I wanted.  We immediately understood each other. Aiaru got my thought from the first minutes, and I fully entrusted the site to her. I plan to order from her in the future. Because visual and technical work is important for me.',
    author: 'Akmaral',
    position: 'freelance photographer',
  },
  {
    text: 'If you are reading this, please give me some testimonial aaaa',
    author: 'You',
    position: 'someone who cares',
  },


]
const textWrap = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems: 'center',
  margin: '50px',
  backgroundColor: 'transparent',
  width: '100%',
}
export default function TrustSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'customDots',
    arrows: false
  };
  return (
    <Slider {...settings} className ="sliderStyle">
      <div>
        <div style={word} className="nomargin"> 
          <div style= {textWrap}>
            <p style={{backgroundColor: 'transparent', fontStyle: 'italic', fontSize: '1.2rem'}}> {quotes[0].text} </p>
            <p style={{backgroundColor: 'transparent', marginTop: '15px'}}> 
              <span style={{backgroundColor: 'transparent', fontWeight: 500, color: '#7C9ABE'}}>  {quotes[0].author},</span> {quotes[0].position} 
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={word} className="nomargin"> 
          <div style= {textWrap}>
            <p style={{backgroundColor: 'transparent', fontStyle: 'italic', fontSize: '1.2rem'}}> {quotes[1].text} </p>
            <p style={{backgroundColor: 'transparent', marginTop: '15px'}}> 
              <span style={{backgroundColor: 'transparent', fontWeight: 500, color: '#7C9ABE'}}>  {quotes[1].author},</span> {quotes[1].position} 
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={word} className="nomargin"> 
          <div style= {textWrap}>
            <p style={{backgroundColor: 'transparent', fontStyle: 'italic', fontSize: '1.2rem'}}> {quotes[2].text} </p>
            <p style={{backgroundColor: 'transparent', marginTop: '15px'}}> 
              <span style={{backgroundColor: 'transparent', fontWeight: 500, color: '#7C9ABE'}}>  {quotes[2].author},</span> {quotes[2].position} 
            </p>
          </div>
        </div>
      </div>
      
    </Slider>
  );
}
