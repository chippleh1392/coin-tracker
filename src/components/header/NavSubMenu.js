const NavSubMenu = (props) => {
    return ( 
        <div className="navList-item-subMenu">
            <ul className="navList-subMenu-list">
                {
                    Object.entries(props.children).map( ([key, value]) => ( 
                        <li className="navList-subMenu-item" id={key}> 
                            <a className="navList-subMenu-action" href={value.url}>
                                {value.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default NavSubMenu;