import React from 'react';
import Counter from '../counter/Counter';
import Image from 'next/image';

const AboutV5 = () => {
    return (
        <>
            <div className="about-style-five-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 pr-70 pr-md-15 pr-xs-15">
                            <div className="about-style-five-left-info">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><Counter end={846}/></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <h4>Satisfied Customers <a href="#"><i className="fas fa-long-arrow-right" /></a></h4>
                                </div>
                                <Image src="/assets/img/about/3.png" alt="Image Not Found" width={615} height={355} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-style-five-right-info">
                                <h4 className="sub-title">About Company</h4>
                                <h2 className="title split-text">Discover Innovative Solutions & Technology</h2>
                                <p>
                                    Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom.
                                </p>
                                <div className="list-card">
                                    <h4>Our Support Facility</h4>
                                    <p>
                                        We help businesses thrive by acting as custom software ntcidents
                                    </p>
                                    <ul className="list-style-two">
                                        <li>Cloud based services free spaces</li>
                                        <li>Expert team member</li>
                                        <li>100% certified company</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV5;