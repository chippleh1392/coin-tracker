import Logo from '../common/Logo';
import Nav from './Nav';
import NavUser from './NavUser';
import HeaderMarketStats from './HeaderMarketStats';
import DarkMode from './DarkMode';
import MobileMenuToggle from './MobileMenuToggle';

const Header = () => {
	return (
		<header className="header">
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
						<Nav />
						<NavUser />
						<MobileMenuToggle />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;