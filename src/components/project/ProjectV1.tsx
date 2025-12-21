"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';
import ProjectV1Data from "@/assets/jsonData/project/ProjectV1Data.json"
import SingleProjectV1 from "./SingleProjectV1";

const ProjectV1 = () => {
    return (
        <>
            <div className="project-style-one-area default-padding bg-gradient bottom-shape-light">
                <div className="container">
                    <div className="heading-left text-light">
                        <div className="row">
                            <div className="col-xl-5 col-lg-7">
                                <div className="content-left">
                                    <h5 className="sub-title">Popular Projects</h5>
                                    <h2 className="title split-text">Our most recent Completed Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                className="project-style-one-carousel swiper wow fadeInUp"
                                direction={"horizontal"}
                                loop={true}
                                grabCursor={true}
                                autoplay={true}
                                // If we need pagination
                                pagination={{
                                    el: '.project-pagination',
                                    type: 'fraction',
                                    clickable: true,
                                }}

                                // Navigation arrows
                                navigation={{
                                    nextEl: ".project-button-next",
                                    prevEl: ".project-button-prev"
                                }}
                                modules={[Navigation, Keyboard, Autoplay]}
                            >
                                <div className="swiper-wrapper">
                                    {ProjectV1Data.map(project =>
                                        <SwiperSlide key={project.id}>
                                            <SingleProjectV1 project={project} />
                                        </SwiperSlide>
                                    )}
                                </div>
                                <div className="project-swiper-nav">
                                    <div className="project-pagination" />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV1;