import Image from "next/image";
import AboutFactV1Data from "@/assets/jsonData/fact/AboutFactV1Data.json"
import AboutFactV1 from "../fact/AboutFactV1";
import FaqV2Data from "@/assets/jsonData/faq/FaqV2Data.json"
import SingleFaqV2 from "../faq/SingleFaqV2";

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src="/assets/img/shape/3.png" alt="Image Not Found" width={58} height={122} />
                    <Image src="/assets/img/shape/4.png" alt="Image Not Found" width={83} height={94} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-5 col-lg-6">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src="/assets/img/about/1.jpg" alt="Image Not Found" width={783} height={900} />
                                <div className="about-card wow fadeInUp" data-wow-delay="500ms">
                                    <ul>
                                        {AboutFactV1Data.map(fact =>
                                            <AboutFactV1 fact={fact} key={fact.id} />
                                        )}
                                    </ul>
                                </div>
                                <div className="thumb-shape-bottom wow fadeInDown" data-wow-delay="300ms">
                                    <Image src="/assets/img/illustration/4.png" alt="Image Not Found" width={285} height={290} />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-6 col-lg-5  offset-xl-1 offset-lg-1">
                            <h4 className="sub-title">About Our Company</h4>
                            <h2 className="title split-text mb-25">Discover Innovative Solutions & Technology</h2>
                            <div className="wow fadeInUp" data-wow-delay="200ms">
                                <p>
                                    Work to understand your issues and are driven to ask better questions in the pursuit of making work. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an.
                                </p>
                                <div className="accordion mt-30" id="faqAccordion">
                                    {FaqV2Data.map(faq =>
                                        <SingleFaqV2 faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;