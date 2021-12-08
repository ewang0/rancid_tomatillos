import React from 'react';
import './Banner.scss';
import ReactStars from 'react-stars';

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <section className="banner">
                <div className="banner-info">
                    <h2>Movie Title</h2>
                    <div className='ratingsContainer'>
                        <ReactStars count={5} value={this.state.rating / 2} size={15} color2={'lightgrey'} />
                    </div>
                    <p>Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!</p>
                    <p>139 Minutes</p>
                </div>
                <div className="banner-image-wrapper">
                    <img src="https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg"/>
                    <div className="banner-image-overlay"></div>
                </div>
            </section>
        )
    }
}

export default Banner;