import React from 'react';
import logo from '../logo.png';
import '../css/logo.css';

function Logo() {
	return (
		<a href="/" className="header__logo">
			<img src={logo} className="logo"></img>
		</a>
	)
}

export default Logo;