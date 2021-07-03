import React, { Component } from 'react';

export class AboutDevs extends Component {

    state = {
        hexx:false,
        amber:false,
        ryan:false,
        taylor:false,
        lee:false,
        resources:false,
        fade:false
    }

    

    closePopup(){
        this.setState({
            hexx:false,
            amber:false,
            ryan:false,
            taylor:false,
            lee:false,
            resources:false,
            fade:false
        });
    }

    toggleHexx(){
        this.setState({hexx:!this.state.hexx, fade:!this.state.fade});
    }

    toggleAmber(){
        this.setState({amber:!this.state.amber, fade:!this.state.fade});
    }

    toggleRyan(){
        this.setState({ryan:!this.state.ryan, fade:!this.state.fade});
    }

    toggleTyler(){
        this.setState({tyler:!this.state.tyler, fade:!this.state.fade});
    }

    toggleLee(){
        this.setState({lee:!this.state.lee, fade:!this.state.fade});
    }

    toggleResources(){
        this.setState({resources:!this.state.resources, fade:!this.state.fade});
    }

    render() {
        return(
            <section className="infoButtons">
                    <ul>
                        <li>
                            <button className="devs" onClick={this.toggleHexx.bind(this)}><img src="./images/hexx.png"></img></button>
                        </li>
                        <li>
                            <button className="devs" onClick={this.toggleAmber.bind(this)}><img src="./images/amber.jpg"></img></button>
                        </li>
    
                        <li>
                            <button className="devs" onClick={this.toggleRyan.bind(this)}><img src="./images/ryan.jpg"></img></button>
                        </li>
                    
                        <li>
                            <button className="devs" onClick={this.toggleTyler.bind(this)}><img src="./images/taylor.jpg"></img></button>
                        </li>
                    
                        <li>
                            <button className="devs" onClick={this.toggleLee.bind(this)}><img src="./images/lee.jpg"></img></button>
                        </li>
                    
                    </ul>
                    <div className={this.state.fade?"":"hideme"} id="fade"></div>
    
                    <section className={this.state.hexx?"popup":"hideme popup"} id="hexx">
                        <figure>
                            <img src="./images/hexx.png"></img>
                            <figcaption>HUMAN</figcaption>
                        </figure>
                        <ul>
                            <li><a href="https://github.com/" target="_blank"><img src="./images/github.png"></img></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><img src="./images/linkedIn.png"></img></a></li>
                        </ul>
                        <p>Hi there! I am Hexx and I've spent the last year and a half studying full stack software development, data science and machine learning. I made a career change in March of 2020 and utilized my downtime from COVID's lockdown by attending an accelerated software development program.
I am dedicated to joining the mission that will use technology to empower people from every walk of life. I come from a non-traditional background and can offer progressive companies a unique view into diversity and inclusion. My expertise in these areas will help bring their technology to every single person on the planet.
Socially-conscious technology is what the world needs for the human species to thrive. I am committed to uniting science and technology in an effort to innovate a better quality of life. Are you ready to create magic with me?</p>
                        <button onClick={this.closePopup.bind(this)}>Close</button>
                    </section>
                    <section className={this.state.amber?"popup":"hideme popup"} id="amber">
    
                    </section>
                    <section className={this.state.ryan?"popup":"hideme popup"} id="ryan">
    
                    </section>
                    <section className={this.state.tyler?"popup":"hideme popup"} id="tyler">
    
                    </section>
                    <section className={this.state.lee?"popup":"hideme popup"} id="lee">
    
                    </section>
    
                    <button className="resources" onClick={this.toggleResources.bind(this)}>Resources!</button>
    
                    <section className={this.state.resources?"popup":"hideme popup"} id="resourcePopup">
    
                    </section>
    
                </section>
            
            
            
            )
    }
}

export default AboutDevs;