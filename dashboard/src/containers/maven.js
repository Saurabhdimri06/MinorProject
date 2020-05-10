import React from "react"

class Maven extends React.Component{

    render(){
        return(
            <div className="db_body">
                <h2>About Maven</h2>
                    <p>
                    Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.
                    If you think that Maven could help your project, you can find out more information in the "About Maven" section of the navigation: this includes an in-depth description of what Maven is and a list of some of its main features. 
                    </p>

                    <h3> Processes Used</h3>
                    <ul>
                        <li>POM Files:</li>
                        <p>Project Object Model(POM) Files are XML file that contains information related to the project and configuration information such as dependencies, source directory, plugin, goals etc. used by Maven to build the project. When you should execute a maven command you give maven a POM file to execute the commands. Maven reads pom.xml file to accomplish its configuration and operations.</p>
                        <li>Dependencies and Repositories:</li>
                        <p>Dependencies are external Java libraries required for Project and repositories are directories of packaged JAR files. The local repository is just a directory on your machine hard drive. If the dependencies are not found in the local Maven repository, Maven downloads them from a central Maven repository and puts them in your local repository.</p>
                        <li>Build Life Cycles, Phases and Goals:</li>
                        <p>A build life cycle consists of a sequence of build phases, and each build phase consists of a sequence of goals. Maven command is the name of a build lifecycle, phase or goal. If a lifecycle is requested executed by giving maven command, all build phases in that life cycle are executed also. If a build phase is requested executed, all build phases before it in the defined sequence are executed too.</p>
                        <li>Build Profiles:</li>
                        <p>Build profiles a set of configuration values which allows you to build your project using different configurations. For example, you may need to build your project for your local computer, for development and test. To enable different builds you can add different build profiles to your POM files using its profiles elements and are triggered in the variety of ways.</p>
                        <li>Build Plugins:</li>
                        <p>Build plugins are used to perform specific goal. you can add a plugin to the POM file. Maven has some standard plugins you can use, and you can also implement your own in Java.</p>
                    </ul>
            </div>
        )
    }
}

export default Maven