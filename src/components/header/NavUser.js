import IconBell from '../common/IconBell';
import IconUser from '../common/IconUser';
import ChevronDown from '../common/ChevronDown';

const NavUser = () => {
    return (
        <div className="navUser">
            <button className="navUser-icon">
                <IconBell />
                <ChevronDown />
            </button>
            <button className="navUser-icon">
                <IconUser />
                <ChevronDown />
            </button>
        </div>
    );
}

export default NavUser;
