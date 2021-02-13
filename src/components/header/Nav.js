import ChevronDown from '../common/ChevronDown';

const Nav = ({ open }) => {

    const isHidden = open ? true: false;

    return (
        <nav className={`nav ${open ? "nav--open" : ""}`}>
            <ul className="navList-items">
                <li className="navList-item">
                    <a className="navList-action" href="#">
                        Cryptocurrencies
                        <ChevronDown />
                    </a>
                </li>
                <li className="navList-item">
                    <a className="navList-action" href="#">
                        Exchanges
                        <ChevronDown />
                    </a>
                </li>
                <li className="navList-item">
                    <a className="navList-action" href="#">
                        Portfolio
                    </a>
                </li>
                <li className="navList-item">
                    <a className="navList-action" href="#">
                        Watchlist
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;