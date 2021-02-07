import IconBell from '../common/IconBell';
import IconUser from '../common/IconUser';

const NavUser = () => {
    return (
        <div className="navUser">
            <button>
                <IconBell />
            </button>
            <button>
                <IconUser />
            </button>
        </div>
    );
}

export default NavUser;
