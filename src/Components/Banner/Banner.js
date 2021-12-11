import React from 'react';
import './Banner.scss';
import ReactStars from 'react-stars';
import './react-carousel.scss';
import { getSingleMovie } from '../../apiCalls';
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
              <animated.div style={style} className="banner">
                    <div className="banner-info">
                        <h2>{movieObj.title}</h2>
                        <div className='ratingsContainer'>
                            <ReactStars count={5} value={movieObj.average_rating / 2} size={15} color2={'lightgrey'} />
                        </div>
                        <p>{movieObj.overview}</p>
                        <p>{movieObj.runtime}</p>
                    </div>
                    <div className="banner-image-wrapper">
                        <img src={movieObj.backdrop_path}/>
                        <div className="banner-image-overlay"></div>
                    </div>
                </animated.div>
            )
    })

    return(
        <Carousel showArrows={true}>
            {randomBanners}
        </Carousel>
        
    )
}

export default Banner;

// return (
//     <section className="banner">
//         <div className="banner-info">
//             <h2>{movieObj.title}</h2>
//             <div className='ratingsContainer'>
//                 <ReactStars count={5} value={movieObj.average_rating / 2} size={15} color2={'lightgrey'} />
//             </div>
//             <p>{movieObj.overview}</p>
//             <p>{movieObj.runtime}</p>
//         </div>
//         <div className="banner-image-wrapper">
//             <img src={movieObj.backdrop_path}/>
//             <div className="banner-image-overlay"></div>
//         </div>
//     </section>
// )