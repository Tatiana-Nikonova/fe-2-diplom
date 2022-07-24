import React from 'react';
import cashed from '../img/ic_cached_white_48dp.png';
import Logo from './Logo';
import Ribbon3 from './Ribbon3';
import '../css/header1.css';
import '../css/ribbon3.css';

function Header() {
	return (
		<div className="header">
			<div className="header__container">
				<Logo />
			</div>
			<div className="header__content">
				<div className="header__content-form">
					<form className="form-router" action="#" method="get">
						<div className="form-router__container">
							<label htmlFor name="route">Направление</label>
							<div className='select-grup'>
								<select name="route" className="select-router router-svg">
									<option value="moscow">Москва</option>
									<option value="angarsk">Ангарск</option>
									<option value="arhangelsk">Архангельск</option>
									<option value="astrahan">Астрахань</option>
									<option value="barnaul">Барнаул</option>
									<option value="belgorod">Белгород</option>
									<option value="blagoveshchensk">Благовещенск</option>
									<option value="bratsk">Братск</option>
									<option value="briansk">Брянск</option>
									<option value="vielikijnovgorod">Великий Новгород</option>
								</select>

								<div className="cashed">
									<img src={cashed} className="logo"></img>
								</div>

								<select name="route" className="select-router">
									<option value="moscow">Москва</option>
									<option value="angarsk">Ангарск</option>
									<option value="arhangelsk">Архангельск</option>
									<option value="astrahan">Астрахань</option>
									<option value="barnaul">Барнаул</option>
									<option value="belgorod">Белгород</option>
									<option value="blagoveshchensk">Благовещенск</option>
									<option value="bratsk">Братск</option>
									<option value="briansk">Брянск</option>
									<option value="vielikijnovgorod">Великий Новгород</option>
								</select>
							</div>
						</div>

						<div className="form-data__container">
							<label htmlFor name="date">Дата</label>
							<div className='select-grup'>
								<input name="date" type="date" className="select-router select-input1" />
								<input name="date" type="date" className="select-router" />
							</div>
						</div>
					</form>
					<div className='button'>
						<button className='button-router' type="submit">Найти билеты</button>
					</div>
				</div>
			</div>
			<Ribbon3 />
		</div>
	)
}

export default Header;