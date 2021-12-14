import React from 'react'
import './About.scss'

const About = () => {
    return(
        <section className="about-container">
            <h1>TEAM</h1>
            <article className="eddie">
                <img src='./eddie-profile.jpg' className="profile-image"></img>
                <div className="profile-text">
                    <h2>Edward Krupicka</h2>
                    <p>Edward is a Turing Student and Air Force Veteran. He spent the last 4 years of his life as an avionics technician at Joint Base Pearl Harbor, Hawaii. When his contract came time for renewal he decided to follow his passions and move towards a career that involved design. He took a liking to coding and attended Turing’s Front-End Engineering program. He now has experience with the following languages - JavaScript, HTML, CSS and React.</p><p>When he’s not fiddling with CSS for far too long, you can find Edward at the climbing gym. He also likes to build keyboards and furniture!</p>
                    <div className="">
                        
                    </div>
                </div>
            </article>
            <article className="eric">
                <div className="profile-text">
                    <h2>Eric Wang</h2>
                    <p>Eric is a Turing Student and recent graduate of Dartmouth College, where he studied art. At Dartmouth, he was a UX designer in the DALI Lab, designing web and mobile applications for real clients. Fascinated by the intersection of design and development, he decided to join Turing to gain skills in front-end web development. He hopes to pursue engineering roles in which he could apply his eye for color and detail, in addition to his highly technical background in JavaScript, HTML, CSS, and React.</p>
                    <p>When he’s not coding or designing, you can find Eric playing tennis, or working on his art. He also loves podcasts and going out to eat.</p>
                </div>    
                <img src='./eric-profile.jpeg' className="profile-image"></img>
            </article>
            
        </section>
    )
}

export default About;