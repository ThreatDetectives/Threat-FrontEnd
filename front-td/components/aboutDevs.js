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

    toggleTaylor(){
        this.setState({taylor:!this.state.taylor, fade:!this.state.fade});
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
                            <button className="devs" onClick={this.toggleTaylor.bind(this)}><img src="./images/taylor.jpg"></img></button>
                        </li>
                    
                        <li>
                            <button className="devs" onClick={this.toggleLee.bind(this)}><img src="./images/lee.jpg"></img></button>
                        </li>
                    
                    </ul>
                    <ul className="resourcesUL">
                        <li>
                            <button className="resources" onClick={this.toggleResources.bind(this)}>Resources!</button>
                        </li>
                    </ul>
                    <div className={this.state.fade?"":"hideme"} id="fade"></div>
                    
                    <section className={this.state.hexx?"popup":"hideme popup"} id="hexx">

                        <figure>
                            <img src="./images/hexx.png"></img>
                            <figcaption>Hexx King</figcaption>
                        </figure>
                        <ul>
                            <li><a href="https://github.com/HexxKing" target="_blank"><img src="./images/github.png"></img></a></li>
                            <li><a href="https://www.linkedin.com/in/hexx-king/" target="_blank"><img src="./images/linkedIn.png"></img></a></li>
                        </ul>
                        <p>
                            Hi there! I am Hexx and I've spent the last year and a half studying full stack software development, data science and machine learning. I made a career change in March of 2020 and utilized my downtime from COVID's lockdown by attending an accelerated software development program.
                            <br></br>
                            <br></br>
                            I am dedicated to joining the mission that will use technology to empower people from every walk of life. I come from a non-traditional background and can offer progressive companies a unique view into diversity and inclusion. My expertise in these areas will help bring their technology to every single person on the planet.
                            <br></br>
                            <br></br>
                            Socially-conscious technology is what the world needs for the human species to thrive. I am committed to uniting science and technology in an effort to innovate a better quality of life. Are you ready to create magic with me?
                        </p>
                        <button onClick={this.closePopup.bind(this)}>Close</button>

                    </section>
                    <section className={this.state.amber?"popup":"hideme popup"} id="amber">

                        <figure>
                            <img src="./images/amber.jpg"></img>
                            <figcaption>Amber Falbo</figcaption>
                        </figure>
                        <ul>
                            <li><a href="https://github.com/AmberFalbo" target="_blank"><img src="./images/github.png"></img></a></li>
                            <li><a href="https://www.linkedin.com/in/amberfalbo" target="_blank"><img src="./images/linkedIn.png"></img></a></li>
                        </ul>
                        <p>
                        Hello! I'm a Software Developer with a robust customer service background and volunteer for nonprofits. I'm passionate not only about using code efficiently but also about teamwork. I have a background in management, culinary arts, and customer service that will help me to develop creative, customer-focused solutions.
                        <br></br>
                        <br></br>
                        I love helping in all aspects! Helping to inspire and watch others grow to meet their potential is a huge passion of mine that I can't wait to bring into this new arena.
                        <br></br>
                        <br></br>
                        I volunteer to feed the houseless every Sunday, visit animal sanctuaries to volunteer bi-monthly, take care of my four cats, and that all drives me so I can keep giving back. Helping others grow and connect to their passions is a magical thing to do for people.
                        <br></br>
                        <br></br>
                        Helping others and crafting success drives me.
                        </p>
                        <button onClick={this.closePopup.bind(this)}>Close</button>
    
                    </section>
                    <section className={this.state.ryan?"popup":"hideme popup"} id="ryan">

                        <figure>
                            <img src="./images/ryan.jpg"></img>
                            <figcaption>Ryan Pilon</figcaption>
                        </figure>
                        <ul>
                            <li><a href="https://github.com/RyanPilon" target="_blank"><img src="./images/github.png"></img></a></li>
                            <li><a href="https://www.linkedin.com/in/ryanpilon95/" target="_blank"><img src="./images/linkedIn.png"></img></a></li>
                        </ul>
                        <p>
                            For a while I had no clue what I wanted to work towards for a career. I began my journey by working as a Kick-Boxing instructor at a fitness gym; never again will I think public speaking is anything easy, but a skill to master. I went on to pursue full time employment working toward a Journeyman Commercial Electrician License. I learned what it was like working with, and for, a diverse range of personalities and people. I came to believe that life was not easy and that hard work and dedication is the only way to prove your worth. I began to realize very quickly this is not only a dangerous line of work physically, it also takes a toll on your body over time due to hard manual labor and exposure to high stress situations. When the pandemic hit and work inevitably slowed to a halt i realized I had the chance to make a decision. So with idea and a headstrong attitude I began my journey to become a full time software developer. After working tirelessly on minimal amounts of sleep i achieved a certificate and completed the full program at Code Fellows, a excellent Full Stack Development Boot Camp. My journey in this career field has just began but I know it will be a difficult, yet rewarding expedition.
                        </p>
                        <button onClick={this.closePopup.bind(this)}>Close</button>
        
                    </section>
                    <section className={this.state.taylor?"popup":"hideme popup"} id="taylor">

                    <figure>
                            <img src="./images/taylor.jpg"></img>
                            <figcaption>Taylor Johnson</figcaption>
                        </figure>
                        <ul>
                            <li><a href="https://github.com/johnson-tay09" target="_blank"><img src="./images/github.png"></img></a></li>
                            <li><a href="https://www.linkedin.com/in/taylor-johnson0/" target="_blank"><img src="./images/linkedIn.png"></img></a></li>
                        </ul>
                        <p>
                            Improving manufacturing process with LEAN principles
                            Troubleshooting machine and line issues with root cause analysis
                            Ensuring final product matches engineering print
                            Providing cost estimates for manufacturing improvement projects
                            Support for daily production operations
                            Machine support for CNC mills, laser, press brakes and weld cells.
                            Optimizing machining through tooling and program improvements
                            Creating SOP and LOTO work instructions
                            Training TMs on standard operating procedures
                            Organizing vendor repairs including planned down time and build-ahead
                            Ability to manage multiple projects/timelines simultaneously
                            Presentation of manufacturing improvements at trade shows/tours
                            Establish, foster and develop positive relationships with clients, peers, and supervisors
                            Technical Understanding of: Statics, Mechanical Design, Strength of Materials, Thermo and Fluid Dynamics
                            Attention to detail, organized, self-starter, fast learner
                        </p>
                        <button onClick={this.closePopup.bind(this)}>Close</button>
        
                    </section>
                    <section className={this.state.lee?"popup":"hideme popup"} id="lee">

                    <figure>
                            <img src="./images/lee.jpg"></img>
                            <figcaption>Lee Thomas</figcaption>
                        </figure>
                        <ul>
                            <li><a href="https://github.com/LeeThomas13" target="_blank"><img src="./images/github.png"></img></a></li>
                            <li><a href="https://www.linkedin.com/in/lee-thomas13/" target="_blank"><img src="./images/linkedIn.png"></img></a></li>
                        </ul>
                        <p>
                            Hey my name is Lee and I am an affordable housing developer.
                        </p>
                        <button onClick={this.closePopup.bind(this)}>Close</button>
        
                    </section>
    
                    {/* <button className="resources" onClick={this.toggleResources.bind(this)}>Resources!</button> */}

                    <section className={this.state.resources?"popup":"hideme popup"} id="resourcePopup">

                        <figure>
                            <figcaption>Resources</figcaption>
                        </figure>
                        <ul>
                            <li><img src="./logo512.png"></img></li>
                            <li><a href="https://github.com/ThreatDetectives" target="_blank"><img src="./images/github.png"></img></a></li>
                        </ul>
                        <ol>
                            <li><a href="https://github.com/scottfalbo/react-circle-prog-widget" target="_blank">React circle widget by Scott Falbo</a></li>
                            <li><a href="#" target="_blank">cool resource!!!</a></li>
                            <li><a href="#" target="_blank">cool resource!!!</a></li>
                            <li><a href="#" target="_blank">cool resource!!!</a></li>
                            <li><a href="#" target="_blank">cool resource!!!</a></li>
                            <li><a href="#" target="_blank">cool resource!!!</a></li>
                            <li><a href="#" target="_blank">cool resource!!!</a></li>
                        </ol>
                        <button onClick={this.closePopup.bind(this)}>Close</button>
                                
    
                    </section>
    
                </section>
            
            
            
            )
    }
}

export default AboutDevs;