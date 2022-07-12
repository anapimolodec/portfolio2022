import React, {useState} from 'react'
import '../styles/typography.css'


const workStyles = {
  width: '80%',
  marginLeft: '10%',
}

const oneWork = {
  width: '100%',
  display: 'flex',
  
}

const indexStyle = {
  
  paddingRight: '50px',
  borderRight: 'solid #e7b9aa 1px',
  minWidth: '150px',
  

}
const workGridStyle ={
	marginLeft: '50px',
	display: 'flex', 
	flexDirection: 'row', 
	justifyContent: 'flex-start', 
	paddingBottom: '100px'
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

const imgStyle = {
  objectFit: 'cover',
}

const buttonStyle = {

	width: '120px',
	height: '40px',
	border: '1px solid #031D12',
	borderRadius: '50px',
	fontSize: '1rem',
	marginTop: '10px',

}
const buttonStyle2 = {
	border: '0px',
	fontSize: '1rem',
	marginTop: '10px',
	borderBottom: '3px solid #7C9ABE',
	fontStyle: 'italic',

}
const OneWork = ({link, index}) => {

	const [visible, setVisible] = useState(index == 0 ? true : false);

	const seeMore = (e) => {
	    e.preventDefault();
	    setVisible(!visible);
	    console.log("open/close")
	}
	const indexPstyle = visible ? {
		fontFamily: 'BonVivantSerif, serif',
		fontSize: '96px',
		color: 'black',
		} : {
		fontFamily: 'BonVivantSerif, serif',
		fontSize: '96px',
		color: '#7C9ABE',
	}
	return(
		<div key={link.url} style={oneWork}>
              <div style ={indexStyle}> <p style = {indexPstyle}> 0{index+1} </p></div>
              {visible ? 
              <div style = {{marginLeft: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingBottom: '100px'}}> 
                  <div style={{width: '40%', marginRight: '50px'}}>
                    <img
                      src={link.image}
                      alt={link.image} 
                      placeholder="blurred"
                      width= "100%" 
                      style={imgStyle}/>
                  </div>
                  <div style={{width: '60%'}}>
                    <h2 style={{fontFamily: 'BonVivantSerif, serif', fontSize: '2rem', marginTop: '20px'}}> {link.title} </h2>
                    <div style={desc1} > 

                      <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878'}}> Role </h3> <div style= {{width: '70%'}}> {link.role} </div> </div>
                      {
                        link.url ? (
                          <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878'}}> URL </h3> <div style= {{width: '70%'}}> <a href={link.url} style={{textDecoration: 'none', color: 'black' }}> {link.url}</a></div> </div>
                        ) : ("")
                      }
                      <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878'}}> Description </h3> 
                        <div style= {{width: '70%'}}>  <p> {link.description} </p>
                        <div style={{marginTop: "20px", paddingBottom: "50px"}}> {link.tags.map(tag => 
                          <span key ={tag} style={tagStyle}> {tag} </span>
                          )} </div>
                        </div> 
                      </div>
                      
                    </div>
                    <div style={desc2}>
                      <h3 style= {{fontWeight: 500, color: '#787878', paddingBottom: '10px'}}> Technologies </h3> 
                      <div style= {{}}> {link.technologies.map(tech => (
                          <p key={tech}> {tech} </p>
                        ))} </div> <br />
                      <h3 style= {{fontWeight: 500, color: '#787878', paddingBottom: '10px'}}> My Contribution </h3> 
                      <p style= {{}}> {link.contribution} </p> <br />
                      <p style= {{fontStyle: 'italic', fontWeight: 400, marginBottom: '50px'}}> {link.italictext} </p>
                      <button style={buttonStyle2} onClick = {(e)=>seeMore(e)}> close </button> 
                    </div>
                  </div>


              </div>
              : <div style = {{marginLeft: '50px', marginBottom: '50px'}}> 
              
              <div style={{marginTop: "10px", marginBottom: '10px'}}> {link.tags.map(tag => 
                          <span key ={tag} style={tagStyle}> {tag} </span>
                          )} </div>
              <h2 style={{fontFamily: 'BonVivantSerif, serif', fontSize: '2rem'}}> {link.title} </h2>
              <p> {link.description} </p>
                        
              <button style={buttonStyle} onClick = {(e)=>seeMore(e)}> see more </button> 
              </div> }
              
            </div>
		)
	
}
export default OneWork;