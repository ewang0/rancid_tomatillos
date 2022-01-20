import React from 'react';
import './Footer.scss';
import white_logo from '../../images/white_logo.svg';
import react_logo from '../../images/react_logo.png';

const Footer = () => {
    return(
        <footer className="footer-container">
            <div className="footer-content">
                <section className="logo-description">
                    <img src={white_logo}/>
                    <p>Rancid Tomatillos is a Turing Module 3 project built with React.js, designed and developed by Eddie Krupicka and Eric Wang. It’s definitely NOT Rotten Tomatoes.</p>
                    <p className="copyright">©2021 Eddie Krupicka  and Eric Wang</p>
                </section>
                <div className='links'>
                    <section className="linkedin">
                        <h3>LINKEDIN</h3>
                        <a href='https://www.linkedin.com/in/edwardkrupicka/'>Eddie Krupicka</a>
                        <a href='https://www.linkedin.com/in/ericwang20/'>Eric Wang</a>
                    </section>
                    <section className="github">
                        <h3>GITHUB</h3>
                        <a href='https://github.com/edwardkrupicka'>github.com/edwardkrupicka</a>
                        <a href='https://github.com/ewang0'>github.com/ewang0</a>
                    </section>
                    <section className="repo">
                        <h3>REPO</h3>
                        <a href='https://github.com/ewang0/rancid_tomatillos'>github.com/ewang0/rancid_tomatillos</a>
                    </section>
                </div>
            </div>
            <img className='react-logo' src={react_logo}/>
        </footer>
    )
}

export default Footer;