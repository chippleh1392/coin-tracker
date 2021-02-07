import logo from "../../assets/img/logo.svg";

const Logo = () => {
    return (
        <h1 className="header-logo">
            <a href="/">
                <div className="header-logo-container">
                    <img className="header-logo-image" src={logo} alt="Coin Tracker logo"/>
                </div>
            </a>
        </h1>
    );
}

export default Logo;