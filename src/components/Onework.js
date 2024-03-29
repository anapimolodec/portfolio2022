import React, {useState} from 'react'
import '../styles/typography.css'

const oneWork = {
  width: '100%',
  display: 'flex',
}

const indexStyle = {
  paddingRight: '50px',
  
  minWidth: '150px',
  

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
  marginBottom: '15px',
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
  color: 'black',

}
const buttonStyle2 = {
	border: '0px',
	fontSize: '1rem',
	marginTop: '10px',
	borderBottom: '3px solid #7C9ABE',
	fontStyle: 'italic',
  color: 'black',

}

const imgSvg = {
  width: '40%',
  padding: '10px',
}
const OneWork = ({link, index}) => {

	const [visible, setVisible] = useState(index === 0 ? true : false);

	const seeMore = (e) => {
	    e.preventDefault();
	    setVisible(!visible);
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
		<div key={link.url} style={oneWork} className="oneWork">
              {index <  9 
              ? <div style ={indexStyle} className="index"> <p style = {indexPstyle}> 0{index+1} </p></div>
              : <div style ={indexStyle} className="index"> <p style = {indexPstyle}> {index+1} </p></div>
              }
              {visible ? 
              <div  className="oneWorkGrid"> 
                  <div>
                    <h2 style={{fontFamily: 'BonVivantSerif, serif', fontSize: '2rem', marginTop: '20px'}}> {link.title} </h2>
                    <div style={desc1} > 
                      <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878'}}> Role </h3> <div style= {{width: '70%'}}> {link.role} </div> </div>
                      {
                        link.url ? (
                          <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878'}}> URL </h3> <div style= {{width: '70%'}}> <a href={link.url} target="_blank" style={{textDecoration: 'none', color: 'black' }}> {link.url}</a></div> </div>
                        ) : ("")
                      }
                      {
                        link.code !== "" ? (
                          <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878'}}> Source Code </h3> <div style= {{width: '70%'}}> <a href={link.url} style={{textDecoration: 'none', color: 'black' }}> {link.code}</a></div> </div>
                        ) : ("")
                      }
                      <div style={lineStyle}> <h3 style= {{width: '30%', fontWeight: 500, color: '#787878', wordWrap: 'break-word'}}> Description </h3> 
                        <div style= {{width: '70%'}}>  <p> {link.description} </p>
                        <div style={{marginTop: "20px", paddingBottom: "10px", display: 'flex', flexWrap: 'wrap'}}> {link.tags.map(tag => 
                          <span key ={tag} style={tagStyle}> {tag} </span>
                          )} </div>
                        </div> 
                      </div>
                    </div>
                    <div>
                      <div style ={{'display':'flex'}}>
                      {/* {link.image !== "" ? link.image : null} */}
                        <div style={{'paddingTop': '35px'}}>
                          <h3 style= {{fontWeight: 500, color: '#787878', paddingBottom: '10px'}}> Technologies </h3> 
                          <div style= {{}}> {link.technologies.map(tech => (
                              <p key={tech}> {tech} </p>
                            ))}
                          </div>
                        </div>
                        
                      </div>
                      <div style={desc2}> 
                        <h3 style= {{fontWeight: 500, color: '#787878', paddingBottom: '10px'}}> My Contribution </h3> 
                        <p style= {{}}> {link.contribution} </p> <br />
                        <p style= {{fontStyle: 'italic', fontWeight: 400, marginBottom: '50px'}}> {link.italictext} </p>
                        <button style={buttonStyle2} onClick = {(e)=>seeMore(e)}> close </button> 
                      </div>
                      
                  </div>
                  

              </div>
              </div>
              : 
              <div className="oneWorkGridClosed"> 
              <div style={{marginTop: "10px", display: 'flex', flexWrap: 'wrap'}}> {link.tags.map(tag => 
                          <span key ={tag} style={tagStyle}> {tag} </span>
                          )} </div>
              <h2 style={{fontFamily: 'BonVivantSerif, serif', fontSize: '2rem'}}> {link.title} </h2>
              <p> {link.description} </p>
                        
              <button style={buttonStyle} className="button" onClick = {(e)=>seeMore(e)}> see more </button> 
              </div>
              }
</div>
)};
export default OneWork;