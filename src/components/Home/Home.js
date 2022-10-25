import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import './Home.css'

const Home = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item >
                    <div className='container banner_bg d-md-flex justify-content-between align-items-center'>
                        <div className='w-50 text-white '>
                            <h3>learn coding and keep pace with globalization.</h3>
                            <p>Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program.</p>
                        </div>

                        <div className='w-50 min-vh-100 h-100  d-flex justify-content-center align-items-center'>
                            <img
                                className="banner_img"
                                src={img1}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='container banner_bg d-md-flex justify-content-between align-items-center'>
                        <div className='w-50 text-white '>
                            <h3>learn coding and keep pace with globalization.</h3>
                            <p>Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program.</p>
                        </div>

                        <div className='w-50 min-vh-100 h-100  d-flex justify-content-center align-items-center'>
                            <img
                                className="banner_img"
                                src={img2}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className='container banner_bg d-md-flex justify-content-between align-items-center'>
                        <div className='w-50 text-white '>
                            <h3>learn coding and keep pace with globalization.</h3>
                            <p>Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program.</p>
                        </div>

                        <div className='w-50 min-vh-100 h-100  d-flex justify-content-center align-items-center'>
                            <img
                                className="banner_img"
                                src={img3}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home