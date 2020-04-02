import React from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Body from "../components/body"


class PortalBody extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Sidebar />   
                <Body />
            </div>
        )
    }
}

export default PortalBody