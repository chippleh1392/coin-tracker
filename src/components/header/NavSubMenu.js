import React, { useState } from 'react';
import ChevronDown from '../common/ChevronDown';

const NavSubMenu = (props) => {

    // nav submenu open/close functionality
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    console.log(props);

    // subMenu list map function
    const subMenuList = props.item.children.map((el, index) => (
        <li className="navList-subMenu-item" key={el.id}> 
            <a className="navList-subMenu-action" href={el.url}>
                {el.name}
            </a>
        </li>
    ))

    // return
    return (
        <> 
            <div className="navList-action-container">
                <a href={props.item.url} className="navList-action">
                    {props.item.name}
                </a>
                <button className="button button--openMore" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                    <ChevronDown></ChevronDown>
                </button>
            </div>
            <div className={`navList-item-subMenu ${subMenuOpen ? "open": ""}`}>
                <ul className="navList-subMenu-list">
                    {subMenuList}
                </ul>
            </div>
        </>
     );
}
 
export default NavSubMenu;