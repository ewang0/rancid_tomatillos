import React from 'react';
import './Banner.scss';
import ReactStars from 'react-stars';
import './react-carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import { useTransition, animated, config } from 'react-spring';

const Banner = ({ data }) => {

    const shuffledData = data.sort((a,b) => 0.5-Math.random());

    const transition = useTransition(true, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.default,
      })
  
    const randomBanners = shuffledData.map((movieObj) => {
        return transition(
            (style) =>
              <animated.div style={style} className="banner">
                    <div className="banner-info">
                        <h2>{movieObj.title}</h2>
                        <div className='ratingsContainer'>
                            <ReactStars count={5} value={movieObj.average_rating / 2} size={15} color2={'lightgrey'} />
                        </div>
                        <p>{movieObj.overview}</p>
                        <p><b>{movieObj.runtime} Minutes</b></p>
                    </div>
                    <div className="banner-image-wrapper">
                        <img src={movieObj.backdrop_path}/>
                        <div className="banner-image-overlay"></div>
                    </div>
                </animated.div>
            )
    })

const retrieveBanners = () => {
    if(randomBanners.length === 37){
        return randomBanners
    }
}

    return(
        <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false}>
            {retrieveBanners()}
        </Carousel>
        
    )
}

export default Banner;