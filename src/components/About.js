import React from 'react';

import { Card } from 'react-bootstrap';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import May from '../images/May.jpg';


export default function About () {
    return (
        <div className="about">
            <div className="color-block">
                <h1 data-aos="fade-up" data-aos-delay="400">About us</h1>
            </div>
            <div className="image-about" data-aos="fade-in" data-aos-delay="700"></div>
            <div className="our-team">
                <h1 data-aos="fade-up" data-aos-delay="400"><span>Our</span> Team</h1>

            <div className="caro">
            
                    <CarouselProvider
                        naturalSlideWidth={80}
                        naturalSlideHeight={145}
                        totalSlides={6}
                        visibleSlides={3}
                    >
                        <ButtonBack className="backButton"><svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="1.5" width="77" height="77" rx="18.5" fill="white" stroke="#FF0066" stroke-width="3"/>
                                                            <line x1="52.3356" y1="18.2858" x2="29.7856" y2="40.8357" stroke="#FF0066" stroke-width="3"/>
                                                            <line x1="49.4891" y1="63.6106" x2="26.9392" y2="41.0606" stroke="#FF0066" stroke-width="3"/>
                                                        </svg>
                        </ButtonBack>
                        <ButtonNext className="nextButton"><svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="78.5" y="78.5" width="77" height="77" rx="18.5" transform="rotate(-180 78.5 78.5)" fill="white" stroke="#FF0066" stroke-width="3"/>
                                                            <line x1="27.6644" y1="61.7142" x2="50.2144" y2="39.1643" stroke="#FF0066" stroke-width="3"/>
                                                            <line x1="30.5109" y1="16.3894" x2="53.0608" y2="38.9394" stroke="#FF0066" stroke-width="3"/>
                                                        </svg>
                        </ButtonNext>
                        <Slider>
                        <Slide className="slides" index={0}>
                        <Card className="cards" style={{ width: '270px', height: '436px' }}>
                            <Card.Img variant="top"  style={{ width: '270px', height: '270px', background: 'black' }} />
                            <Card.Body>
                                <Card.Title>Fiona Igwe</Card.Title>
                                <p>CEO / Founder</p>
                                <a href="">See More ></a>
                            </Card.Body>
                        </Card>
                        </Slide>
                        <Slide index={1}>
                        <Card className="cards" style={{ width: '270px', height: '436px' }}>
                            <Card.Img variant="top" src={May} style={{ width: '270px', height: '270px' }} />
                            <Card.Body>
                                <Card.Title>May Showumi</Card.Title>
                                <p>Head of Technology</p>
                                <a href="">See More ></a>
                            </Card.Body>
                        </Card>
                        </Slide>
                        <Slide index={2}>
                        <Card className="cards" style={{ width: '270px', height: '436px' }}>
                            <Card.Img variant="top"  style={{ width: '270px', height: '270px', background: 'black'}} />
                            <Card.Body>
                                <Card.Title>Daniel Cahalane</Card.Title>
                                <p>Volunteer Developer</p>
                                <a href="">See More ></a>
                            </Card.Body>
                        </Card>
                        </Slide>
                        <Slide index={3}>
                        <Card className="cards" style={{ width: '270px', height: '436px' }}>
                            <Card.Img variant="top"  style={{ width: '270px', height: '270px', background: 'black' }} />
                            <Card.Body>
                                <Card.Title>Full Name</Card.Title>
                                <p>Position</p>
                                <a href="">See More ></a>
                            </Card.Body>
                        </Card>
                        </Slide>
                        <Slide index={4}>
                        <Card className="cards" style={{ width: '270px', height: '436px' }}>
                            <Card.Img variant="top"  style={{ width: '270px', height: '270px', background: 'black' }} />
                            <Card.Body>
                                <Card.Title>Full Name</Card.Title>
                                <p>Position</p>
                                <a href="">See More ></a>
                            </Card.Body>
                        </Card>
                        </Slide>
                        <Slide index={5}>
                        <Card className="cards" style={{ width: '270px', height: '436px' }}>
                            <Card.Img variant="top"  style={{ width: '270px', height: '270px', background: 'black' }} />
                            <Card.Body>
                                <Card.Title>Full Name</Card.Title>
                                <p>Position</p>
                                <a href="">See More ></a>
                            </Card.Body>
                        </Card>
                        </Slide>
                        </Slider>
                    </CarouselProvider>

                        
                 </div>
            </div>
                
            <div className="our-story">
                <h1  data-aos="fade-up" data-aos-delay="400">Our Story</h1>
                <div className="line">
                    <svg width="38" height="974" viewBox="0 0 38 974" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="16.4999" y1="12.9858" x2="25.4999" y2="960.986" stroke="black" stroke-width="3"/>
                    <path d="M36.5 593C36.5 599.201 30.8379 604.5 23.5 604.5C16.1621 604.5 10.5 599.201 10.5 593C10.5 586.799 16.1621 581.5 23.5 581.5C30.8379 581.5 36.5 586.799 36.5 593Z" fill="white" stroke="#FF0066" stroke-width="3"/>
                    <path d="M36.5 961C36.5 967.201 30.8379 972.5 23.5 972.5C16.1621 972.5 10.5 967.201 10.5 961C10.5 954.799 16.1621 949.5 23.5 949.5C30.8379 949.5 36.5 954.799 36.5 961Z" fill="#FF0066" stroke="#FF0066" stroke-width="3"/>
                    <path d="M32.5 419C32.5 425.201 26.8379 430.5 19.5 430.5C12.1621 430.5 6.5 425.201 6.5 419C6.5 412.799 12.1621 407.5 19.5 407.5C26.8379 407.5 32.5 412.799 32.5 419Z" fill="white" stroke="#FF0066" stroke-width="3"/>
                    <path d="M27.5 112C27.5 118.201 21.8379 123.5 14.5 123.5C7.16205 123.5 1.5 118.201 1.5 112C1.5 105.799 7.16205 100.5 14.5 100.5C21.8379 100.5 27.5 105.799 27.5 112Z" fill="white" stroke="#FF0066" stroke-width="3"/>
                    <path d="M27.5 13C27.5 19.2014 21.8379 24.5 14.5 24.5C7.16205 24.5 1.5 19.2014 1.5 13C1.5 6.79858 7.16205 1.5 14.5 1.5C21.8379 1.5 27.5 6.79858 27.5 13Z" fill="#FF0066" stroke="#FF0066" stroke-width="3"/>
                    </svg>
                 </div>

                 <div className="storyBox-1" data-aos="fade-left" data-aos-delay="700">
                     <h2>Heading</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 </div>
                 <div className="arrow-1" data-aos="fade-right" data-aos-delay="900">
                    <svg width="102" height="98" viewBox="0 0 102 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.5 95.1233L3.49325 49L100.5 2.87669L100.5 95.1233Z" fill="#FF0066" stroke="#FF0066" stroke-width="3"/>
                    </svg>
                 </div>

                 <div className="storyBox-2" data-aos="fade-right" data-aos-delay="1100">
                     <h2>Heading</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 </div>
                 <div className="arrow-2" data-aos="fade-left" data-aos-delay="1300">
                    <svg width="102" height="98" viewBox="0 0 102 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102 49L0 97.4974L0 0.502579L102 49Z" fill="#FF0066"/>
                    </svg>
                 </div>

                 <div className="storyBox-3" data-aos="fade-left" data-aos-delay="1500">
                     <h2>Heading</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 </div>
                 <div className="arrow-3" data-aos="fade-right" data-aos-delay="1700">
                    <svg width="102" height="98" viewBox="0 0 102 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.5 95.1233L3.49325 49L100.5 2.87669L100.5 95.1233Z" fill="#FF0066" stroke="#FF0066" stroke-width="3"/>
                    </svg>
                 </div>
            </div>
        </div>
    );
}