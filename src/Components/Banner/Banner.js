import React from 'react';
import './Banner.scss';
import ReactStars from 'react-stars';
import './react-carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import { useTransition, animated, config } from 'react-spring';

const Banner = ({ data }) => {

    const transition = useTransition(true, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.default,
    })
    
    const randomBanners = data.map((movieObj) => {
        return transition(
            (style) =>
                <animated.div style={style} className="banner" key={movieObj.id}>
                    <div className="banner-info">
                        <h2>{movieObj.title}</h2>
                        <span className="ratings-wrapper">
                            <div className='ratingsContainer'>
                                <ReactStars className='reactStars' count={5} value={movieObj.average_rating/2} size={15} color2={'#a4c91c'} color1={'#5c5c5c'}/>
                            </div>
                            <p><b>{(movieObj.average_rating/2).toFixed(1)}</b></p>
                        </span>
                        <p>{movieObj.overview}</p>
                        <p><b>{movieObj.runtime} Minutes</b></p>
                    </div>
                    <div className="banner-image-wrapper">
                        <img src={movieObj.backdrop_path} alt={`${movieObj.title}Banner.img`}/>
                        <div className="banner-image-overlay"></div>
                    </div>
                </animated.div>
            )
    })

    return(
        <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false}>
            {randomBanners}
        </Carousel>
        
    )
}

export default Banner;