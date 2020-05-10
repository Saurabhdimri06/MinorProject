import React from "react"


class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            isloaded : false,
            running : false,
            response: '',
            post: '',
            responseToPost: '',
        }
    }

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
      
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };
      
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        
        this.setState({ responseToPost: body });
      };

    handleClick = () => {

        this.setState({
            running : true,
            isloaded : false
        })
    }

    onClickReport = () => {
        
        setTimeout(function() { 
            this.setState({
                isloaded: true,
                running : !this.state.running
            }) 
        }.bind(this), 5000)
    }

    render(){
        return(
            <div className="db_body">
                <div className="inputform">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="basic-url" placeholder="Github Repo Link"
                        value={this.state.post}
                        onChange={e => this.setState({ post: e.target.value })}
                    />
                    <button className="buttonform button_submit" onClick = {this.handleClick}>Submit</button>
                </form>
                </div>


                    <p>{this.state.responseToPost}</p>
                <br />
                {
                    this.state.running === false ? <p></p>
                    :
                    <div className="report">
                        <div class="loader"></div> 
                        <br />
                        <button className = "button_report button_submit"onClick={this.onClickReport}>Show Report</button>
                    </div>
                }

                {
                    this.state.isloaded === false ? <p></p>
                    :
                    <div className="show_cards">
                        <div className="main_cards">
                            <p>
                                <ul>
                                    <h3>Executing Maven Goals</h3>
                                    <li>Compile Phase Passed
                                        <p>BUILD GENERATED SUCESSFULLY</p>
                                    </li>
                                    <li>Test-Compile Phase Passed
                                        <p>Running darsh.asawa.add.TestAdd
                                            <br />
                                            Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.25 sec
                                            <br />
                                            Running darsh.asawa.add.AppTest
                                            <br />
                                            Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.025 sec
                                            <br />
                                            Results :
                                            Tests run: 2, Failures: 0, Errors: 0, Skipped: 0
                                        </p>
                                    </li>
                                    <li>Test Phase Passed
                                        <p>Running darsh.asawa.add.TestAdd
                                            <br />
                                            Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.25 sec
                                            <br />
                                            Running darsh.asawa.add.AppTest
                                            <br />
                                            Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.025 sec
                                            <br />
                                            Results :
                                            Tests run: 2, Failures: 0, Errors: 0, Skipped: 0
                                        </p>
                                    </li>
                                    <li>Install
                                        <p>
                                            maven-jar-plugin:2.3.2:jar (default-jar) @ add 
                                            <br />
                                            Building jar: /test/target/add-0.0.1-SNAPSHOT.jar
                                            <br />
                                            --------------------------------------------------
                                            <br />
                                            BUILD SUCCESS
                                            <br />
                                            --------------------------------------------------
                                            <br />
                                            Total time: 7.812s
                                            <br />
                                            Finished at: Sat May 09 14:36:14 UTC 2020
                                            <br />
                                            Final Memory: 8M/60M
                                            <br />
                                            --------------------------------------------------
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="main_cards">
                            Second card for SonarQube
                        </div>
                    </div>
                }

                <h3>Dashboard Usage</h3>
                <p>This is a smart dashboard which will run the queries of Maven and Sonarqube for you on the go. 
                    <br />
                    To Access or run the features just add the repo link on the provided text field and Click Run button and your build and test process will be automatically executed by us.
                    <br />
                    Let's have DevOps on the GO.
                </p>
                
                <ul>
                    <li>
                        <h4>Maven</h4>
                        <p>The actions performed on the maven docker containers are: </p>
                        <ul>
                            <li>Compile</li>
                            <li>Test-Compile</li>
                            <li>Test</li>
                            <li>Install</li>
                        </ul>
                    </li>

                    <li>
                        <h4>SonarQube</h4>
                        <p>The actions performed on the sonarqube containers are: </p>
                        <ul>
                            <li>Code Coverage</li>
                            <li>Dead Code test</li>
                        </ul>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Body