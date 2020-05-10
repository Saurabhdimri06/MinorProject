import React from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Body from "../components/body"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./about"
import Maven from "./maven"
import Sonar from "./sonar"

class PortalBody extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path='/' component={ Header } />
                <Route path='/' component={ Sidebar } />

                <Switch>
                    <Route exact path="/" component={ Body } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/maven" component={ Maven } />
                    <Route exact path="/sonar" component={ Sonar } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default PortalBody