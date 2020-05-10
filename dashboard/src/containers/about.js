import React from "react"

class About extends React.Component{

    render(){
        return(
            <div className="db_body"> 
                <h3 className="about_title">Project Title : A Microservices led approach to the Automated Infrastructure Provisioning System.</h3>
                <h5 className="about_title"> Project Contributors: Anirudh Chaudhary, Darsh Asawa, Saurabh Dimri, Shivam Pandey </h5>

                <h3>Project Goal</h3>
                <p>To achieve faster application delivery, the right tools must be used in DevOps environments. There is no single tool that fits all the needs such as server provisioning, configuration management, automated builds, code deployments, and monitoring. Many factors determine the use of a particular tool in your infrastructure. Installing and configuring each and every tool is a tough and time-consuming task. In this project we aim to provide an automated platform via the use of microservices and client-server architecture, that will provide a user with the infrastructure (i.e. DevOps tools) necessary to fulfill their task without any need of configuration or changes in their system.</p>

                <h3 className="about_title"> Motivation Behind The Project</h3>
                <p>
                    For smaller organizations, bringing DevOps into practice is a tough task. If they become aware 	of 	how to bring this culture into practice, even then there’s a lot left. DevOps pipeline involves 	various tools required for automation or project building and even for collaboration. Apart from 	learning the required tools, configuring them takes a lot of time and effort. There are cases where the 	system configuration doesn’t meet minimum requirement of the tool, which may slow the 	development or may lead to some overhead requirements leading to unwanted delay in the project 	timeline. Also, as of now there are no open source tools available in the industry to provide solution 	for the 	given problems. 
                </p>

                <h3 className="about_title">Other Components used besides Maven and SonarQube</h3>
                
                <h3>Conatiners</h3>
                <p>A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. It is just an abstraction at the app layer. Multiple containers can run on the same machine and share the OS kernel with the other containers, each running an isolated process in userspace. Containers take up less space than VMs (container images are typically tens of MBs in size), can handle more applications and require fewer VMs and Operating systems.
                    Containerization is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment. 
                    Containerization, as opposed to traditional hypervisors, has a key advantage that the containers share the Linux kernel used by the operating system running the host machine, which means any other containers running on the host machine will also be using the same Linux kernel [6].
                </p>

                <h3>GIT</h3>
                <p>
                    The programming codes written are called source codes. 
                    Git is an SCM tool that helps by storing your code in repositories, versioning your code, and coordinating among project members. It helps you to invite others to collaborate and provides a way to avoid merge conflicts while effectively sharing the code modifications. It also gives a way to recover a previous version of the code.
                    It is overall a distributed version control system for tracking changes in source code during software development.
                </p>
            </div>
        )
    }
}

export default About