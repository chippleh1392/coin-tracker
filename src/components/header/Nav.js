import React, { useState } from 'react';
import ChevronDown from '../common/ChevronDown';
import NavSubMenu from '../header/NavSubMenu';

const Nav = ({ open }) => {

    // navigation data array
    const navList = [
        {
            id: 0,
            name: "Cryptocurrencies",
            url: "/cryptocurrencies/",
            children: [
                {
                    id: 1,
                    name: "Ranking",
                    url: "/ranking"
                },
                {
                    id: 2,
                    name: "Global Charts",
                    url: "/global-charts"
                },
                {
                    id: 3,
                    name: "Spotlight",
                    url: "/spotlight"
                }
            ]
        },
        {
            id: 1,
            name: "Exchanges",
            url: "/exchanges/",
            children: [
                {
                    id: 1,
                    name: "Spot",
                    url: "/spot/"
                },
                {
                    id: 2,
                    name: "Derivatives",
                    url: "/derivatives"
                },
                {
                    id: 3,
                    name: "DEX",
                    url: "/dex/"
                }
            ]
        },
        {
            id: 2,
            name: "Portfolio",
            url: "/portfolio",
            children: {

            }
        },
        {
            id: 3,
            name: "Watchlist",
            url: "/watchlist",
            children: {

            }
        }
    ]

    // check if nav item has children (i.e. subMenu)
    const hasSubMenu = item => {
        if (item.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    // nav list item map function
    const listItems = navList.map((item, index) => (
        <li className={`navList-item ${hasSubMenu(item.children) ? "has-subMenu" : ""}`} key={item.id}>
            {
                hasSubMenu(item.children) ? 
                <>
                    {/* <div className="navList-action-container">
                        <a href={item.url} className="navList-action">
                            {item.name}
                        </a>
                        <button className="button button--openMore" id={item.id}>
                            <ChevronDown></ChevronDown>
                        </button>
                    </div>
                    <NavSubMenu children={item.children} key={item.id}></NavSubMenu> */}
                    <NavSubMenu item={item}></NavSubMenu>
                </>
                : 
                <>
                    <div className="navList-action-container">
                        <a href={item.url} className="navList-action">
                            {item.name}
                        </a>
                    </div>
                </>
            }
        </li>
    ))

    // return
    return (
        <nav className={`nav ${open ? "nav--open" : ""}`}>
            <ul className="navList-items">
                {listItems}
            </ul>
        </nav>
    );
}

export default Nav;