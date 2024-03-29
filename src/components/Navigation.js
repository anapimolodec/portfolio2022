import React, {useState} from "react";
import '../styles/styles.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Burger from '../images/menu.svg';
const navStyle = {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	zIndex: 100,
  position: 'absolute',
}


const itemStyle = {
	float: 'right',
}

const aStyle = {
	textDecoration: 'none',
	marginLeft: '20px',
	fontFamily: 'Roboto, sans-serif',
	fontWeight: 500,
  color: '#7c9abe',

}

const Navigation = () => {
  const [open, setOpen] = useState(true);
  const menuAction = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
    // console.log(open);
  }
	const [headerStyle, setHeaderStyle] = useState({
  	transition: 'all 300ms ease-in'
	})

	useScrollPosition(
  ({ prevPos, currPos }) => {
    const isVisible = currPos.y >= prevPos.y

    const shouldBeStyle = {
      visibility: isVisible ? 'visible' : 'hidden',
      transition: `all 300ms ${isVisible ? 'ease-in' : 'ease-out'}`,
      transform: isVisible ? 'none' : 'translate(0, -100%)'
    }

    if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

    setHeaderStyle(shouldBeStyle)
  },
  [headerStyle]
  )
  return (
  <nav style={navStyle}>
    <ul className={open ? "menu" : "menuclosed"} id = "menu" style={{...headerStyle}} >
    	<li className="logo" style={{"float":"left"}}><a href="/">anapimolodec</a></li>
    	<li className="item" style={itemStyle}><a href="/#contactme" style={aStyle}>contact</a><div className="underline"></div></li>
    	<li className="item" style={itemStyle}><a href="/works" style={aStyle} >works</a><div className="underline"></div></li>
    	<li className="item" style={itemStyle}><a href="/#about" style={aStyle} >about</a><div className="underline"></div></li>


    </ul>
    <button onClick = {() => menuAction()} className="mobilemenu" > <Burger /> </button>
</nav>
  	);
}

export default Navigation;
