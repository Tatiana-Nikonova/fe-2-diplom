import React from 'react';
import logo from '../logo.png';

function Logo() {
	return (
		<div className="header__logo">
			<img src={logo} className="logo"></img>
		</div>
	)
}

export default Logo;