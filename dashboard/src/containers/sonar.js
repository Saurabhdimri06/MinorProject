import React from "react"

class Sonar extends React.Component{

    render(){
        return(
            <div className="db_body">
                <h2>About SonarQube</h2>
                <p>
                SonarQube is a web-based open source platform used to measure and analyse the source code quality. Code quality analysis makes your code more reliable and more readable.
                SonarQube is written in java but it can analyze and manage code of more than 20 programming languages, including c/c++, PL/SQL, Cobol etc through plugins. Plugins extend the functionality of SonarQube. More than 50 plugins are available.
                SonarQube is maintained by SonarSource.
                </p>

                <h3>Sonar covers the 7 sections of code quality</h3>
                <ul>   
                    <li>Architecture and Design</li>
                    <li>Unit tests</li>
                    <li>Duplicated code</li>
                    <li>Potential bugs</li>
                    <li>Complex code</li>
                    <li>Coding standards</li>
                    <li>Comments</li>
                </ul>

                <h3>Static Code Analysis</h3>
                <p>
                    Static code analysis is a collection of algorithms and techniques used to analyze source code in order to automatically find potential errors or poor coding practices. The idea is similar in spirit to compiler warnings (which can be useful for finding coding errors), but to take that idea a step further and find bugs that are traditionally found using run-time debugging techniques such as testing.
                    Static code analysis, also commonly called "white-box" testing, looks at applications in non-runtime environments. It is the only proven method to cover the entire code base and identify all the vulnerable patterns. Static code analysis is also considered as a way to automate code review process.
                </p>
            </div>
        )
    }
}

export default Sonar