import React from 'react'
import './About.scss'
import { useTransition, animated, config } from 'react-spring';
import eddie_profile from '../../images/eddie_profile.jpg';
import eric_profile from '../../images/eric_profile.jpeg';

const About = () => {
    const transition = useTransition(true, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 100,
        config: config.molasses,
    })

    return transition(
        (style) =>
          <animated.section style={style} className="about-container">
            <h1>TEAM</h1>
            <article className="eddie">
                <img src={eddie_profile} className="profile-image" alt="eddie-profile.jpg"></img>
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
                <img src={eric_profile} className="profile-image" alt="eric-profile.jpeg"></img>
            </article>
            
        </animated.section>
    )
}

export default About;