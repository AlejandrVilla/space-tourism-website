import { Link } from "react-router-dom";
import hamburguerIcon from "/shared/icon-hamburger.svg";
import closeIcon from "/shared/icon-close.svg";
import "./header.scss";

const Header = ({location, menuIsActive, setMenuIsActive}) => {
    const screenWidth = window.innerWidth < 700;

    const handleMenu = (e) => {
        e.stopPropagation();
        setMenuIsActive(!menuIsActive);
    }

    let navClassName = "nav-links-div";
    navClassName += (menuIsActive)? " active" : "";

    const navBar = <nav className="nav-links">
                        <Link className={`link ${location.pathname === "/" ? "active":""}`} to="/">
                            <p className="text-preset-8-bold">00</p>
                            <p className="text-preset-8">HOME</p>
                        </Link>
                        <Link className={`link ${location.pathname === "/destination" ? "active":""}`} to="/destination">
                            <p className="text-preset-8-bold">01</p>
                            <p className="text-preset-8">DESTINATION</p>
                        </Link>
                        <Link className={`link ${location.pathname === "/crew" ? "active":""}`} to="/crew">
                            <p className="text-preset-8-bold">02</p>
                            <p className="text-preset-8">CREW</p>
                        </Link>
                        <Link className={`link ${location.pathname === "/technology" ? "active":""}`} to="/technology">
                            <p className="text-preset-8-bold">03</p>
                            <p className="text-preset-8">TECHNOLOGY</p>
                        </Link>
                    </nav>

    return(
        <div className="header">
            <div className="header-icon">
                <img 
                    className="logo-icon" 
                    src="./shared/logo.svg"
                    alt="logo"/>
                <hr className="header-hr"/>
            </div>
            {screenWidth? (
                <div className="hamburger-div">
                    <img 
                        className="hamburger-icon"
                        onClick={handleMenu}
                        src={hamburguerIcon} 
                        alt="hamburger"/>
                    <div className={navClassName} onClick={(e) => e.stopPropagation()}>
                        <div className="close-div">
                            <div>
                                <img className="icon-close" src={closeIcon} alt="icon close" onClick={handleMenu}/>
                            </div>
                        </div>
                        {navBar}
                    </div>
                </div>
            ):(
                <>
                    {navBar}
                </>
            )}
        </div>
    );
}

export default Header;