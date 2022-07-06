import * as React from "react"
import '../styles/typography.css';

const navStyle = {
	width: '100%',
	height: '100px',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'red',
	paddingLeft: '10%',
	paddingRight: '10%',
}
const Navigation = () => {
	return(
		<nav style = {navStyle} >
			<span> navigation </span>
		</nav>
		)

}

export default Navigation;