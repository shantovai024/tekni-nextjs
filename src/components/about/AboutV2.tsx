import Image from "next/image";
import AboutListData from "@/assets/jsonData/about/AboutListData.json"
import AboutList from "./AboutList";

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding overflow-hidden bg-gray">
                <div className="shape">
                    <Image src="/assets/img/shape/10.png" alt="Shape" width={315} height={290} />
                </div>

                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-two-thumb">
                                <Image className="wow fadeInUp" src="/assets/img/about/5.jpg" alt="Image Not Found" width={720} height={1000} />
                                <Image className="wow fadeInDown" data-wow-delay="100ms" src="/assets/img/about/6.jpg" alt="Image Not Found" width={600} height={750} />
                                <div className="certification wow fadeInUp" data-wow-delay="250ms">
                                    <Image src="/assets/img/icon/10.png" alt="Image Not Found" width={256} height={256} />
                                    <h4> Certified Company</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pl-50 pl-md-15 pl-xs-15">
                            <div className="about-style-two-info">
                                <h4 className="sub-title">About our compnay</h4>
                                <h2 className="title split-text">Discover Innovative Solutions & Technology</h2>
                                {AboutListData.map(list =>
                                    <AboutList list={list} key={list.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;