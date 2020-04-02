import React from "react";
import Logo from "../images/Icon.png"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

class Header extends React.Component{
    render() {
        return(
            <div className="header_main">
                <img src={Logo} alt="Logo" height="80px" width="90px"></img>
                <p>GODOps</p>
                <ul>
                    <li><a href="#"><HomeIcon /></a></li>
                    <li><a href="#"><InfoIcon /></a></li>
                </ul>
            </div>
        )
    }
}

export default Header