import React from "react"


class Body extends React.Component{
    render(){
        return(
            <div className="db_body">
                <form className="inputform">
                    <input type="text" id="basic-url" placeholder="Github Repo Link" />
                    <button>Submit</button>
                </form>
                <br />
                This is the place where the cards will lie 
                <br />
                <div className="main_cards">
                    This is the element for card
                </div>
                <div className="main_cards">
                    Second card for SonarQube
                </div>
            </div>
        )
    }
}

export default Body