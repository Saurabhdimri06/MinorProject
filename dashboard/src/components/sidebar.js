import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import BugReportIcon from '@material-ui/icons/BugReport';

class Sidebar extends React.Component{
    render(){
        return(
                <div className="sidebar">
                    <header className="sidebar_title">
                        <hr />
                    My Dashboard
                    <br />
                        <hr />
                    </header>
                    <ul>
                        <li><a href="#"><HomeIcon />  Home</a></li>
                        <li><a href="#"><InfoIcon />  About</a></li>
                        <li><a href="#"><BuildIcon />  Maven</a></li>
                        <li><a href="#"><BugReportIcon />  SonarQube</a></li>
                    </ul>
                </div>
        )
    }
}

export default Sidebar