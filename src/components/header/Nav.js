import ChevronDown from'../common/ChevronDown';

const Nav = () => {
    return (
        <nav className="nav">
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
                        <ChevronDown />
                    </a>
                </li>
                <li className="navList-item">
                    <a className="navList-action" href="#">
                        Watchlist
                        <ChevronDown />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;