import { Link } from "react-router-dom";
import hamburguerIcon from "/shared/icon-hamburger.svg";
import closeIcon from "/shared/icon-close.svg";
import "./header.scss";

const Header = ({setCurrentBack, menuIsActive, setMenuIsActive, linkActive, setLinkActive}) => {
    const screenWidth = window.innerWidth < 400;

    const handleMenu = (e) => {
        e.stopPropagation();
        setMenuIsActive(!menuIsActive);
    }

    const handleClickLink = (link) => {
        setCurrentBack(link)
        setLinkActive(link);
    }

    let navClassName = "nav-links-div";
    navClassName += (menuIsActive)? " active" : "";

    const navBar = <nav className="nav-links">
                        <Link onClick={() => handleClickLink("home")} className={`link ${linkActive === "home" ? "active":""}`} to="/">
                            <p className="text-preset-8-bold">00</p>
                            <p className="text-preset-8">HOME</p>
                        </Link>
                        <Link onClick={() => handleClickLink("destination")} className={`link ${linkActive === "destination" ? "active":""}`} to="/destination">
                            <p className="text-preset-8-bold">01</p>
                            <p className="text-preset-8">DESTINATION</p>
                        </Link>
                        <Link onClick={() => handleClickLink("crew")} className={`link ${linkActive === "crew" ? "active":""}`} to="/crew">
                            <p className="text-preset-8-bold">02</p>
                            <p className="text-preset-8">CREW</p>
                        </Link>
                        <Link onClick={() => handleClickLink("technology")} className={`link ${linkActive === "technology" ? "active":""}`} to="/technology">
                            <p className="text-preset-8-bold">03</p>
                            <p className="text-preset-8">TECHNOLOGY</p>
                        </Link>
                    </nav>

    return(
        <div className="header">
            <div className="header-icon">
                <img 
                    className="logo-icon" 
                    src="/shared/logo.svg"/>
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