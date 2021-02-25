import React, { useState} from 'react';
import Logo from '../common/Logo';
import Nav from './Nav';
import NavUser from './NavUser';
import HeaderMarketStats from './HeaderMarketStats';
import DarkMode from './DarkMode';
import MobileMenuToggle from './MobileMenuToggle';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className={`header ${open ? "open" : ""}`}>
			<div className="header-top-container">
				<div className="container">
					<div className="header-top">
						<HeaderMarketStats />
						<DarkMode />
					</div>
				</div>
			</div>
			<div className="header-bottom-container">
				<div className="container">
					<div className="header-bottom">
						<Logo />
						<Nav open={open} setOpen={setOpen}/>
						<NavUser />
						<MobileMenuToggle open={open} setOpen={setOpen} />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;