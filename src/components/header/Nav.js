import ChevronDown from '../common/ChevronDown';
import NavSubMenu from '../header/NavSubMenu';

const Nav = ({ open }) => {

    const isHidden = open ? true: false;

    const navObject = {
        nav1: {
            name: "Cryptocurrencies",
            url: "/cryptocurrencies/",
            children: {
                subPage1: {
                    name: "Ranking",
                    url: "/ranking"
                },
                subPage2: {
                    name: "Global Charts",
                    url: "/global-charts"
                },
                subPage3: {
                    name: "Spotlight",
                    url: "/spotlight"
                }
            }
        },
        nav2: {
            name: "Exchanges",
            url: "/exchanges/",
            children: {
                subPage1: {
                    name: "Spot",
                    url: "/spot/"
                },
                subPage2: {
                    name: "Derivatives",
                    url: "/derivatives"
                },
                subPage3: {
                    name: "DEX",
                    url: "/dex/"
                }
            }
        },
        nav3: {
            name: "Portfolio",
            url: "/portfolio",
            children: {

            }
        },
        nav4: {
            name: "Watchlist",
            url: "/watchlist",
            children: {

            }
        }
    }

    return (
        <nav className={`nav ${open ? "nav--open" : ""}`}>
            <ul className="navList-items">
                {
                    Object.entries(navObject).map( ([key, value]) => ( 
                        <li className="navList-item" id={key}> 
                            <a className="navList-action" href={value.url}>
                                {value.name}
                            </a>
                            {Object.keys(value.children).length > 0 ? <NavSubMenu children={value.children}></NavSubMenu> : ""}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;