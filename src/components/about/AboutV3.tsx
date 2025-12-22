import Image from "next/image";
import AboutFactV2Data from "@/assets/jsonData/fact/AboutFactV2Data.json";
import AboutFactV2 from "../fact/AboutFactV2";

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area overflow-hidden bg-gray default-padding-top shape-light-bottom">
                <div className="shape-right-bottom-actual">
                    <Image src="/assets/img/shape/51.png" alt="Image Not Found" width={260} height={615} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <h4 className="sub-title">About Company</h4>
                            <h2 className="title split-text">Discover Innovative Solutions & Technology</h2>
                            <div className="thumb mt-50 mt-xs-30">
                                <Image src="/assets/img/banner/9.jpg" alt="Image Not Found" width={1200} height={675} />
                                <div className="experience wow fadeInUp">
                                    <h2><strong>1650</strong> Year of establishment</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">
                            <div className="fun-fact-box mb-30">
                                {AboutFactV2Data.map(fact =>
                                    <AboutFactV2 fact={fact} key={fact.id} />
                                )}
                            </div>
                            <p className="wow fadeInUp">
                                Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now  get joy you instrument reasonably.
                            </p>
                            <div className="mt-50 mt-xs-30">
                                <div className="list-item-style-two wow fadeInUp">
                                    <div className="number"><i className="fas fa-check" /></div>
                                    <div className="info">
                                        <h4>Planning & strategy</h4>
                                        <p>
                                            Facilisis leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur but man.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-item-style-two wow fadeInUp" data-aos-delay="500">
                                    <div className="number"><i className="fas fa-check" /></div>
                                    <div className="info">
                                        <h4>Worldwide Coverage</h4>
                                        <p>
                                            Technical leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur..
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="company-autor">
                                <div className="left-info">
                                    <div className="author-thumb">
                                        <Image src="/assets/img/teams/1.jpg" alt="Author Image" width={500} height={500} />
                                    </div>
                                    <div className="content">
                                        <h4>Alex Martinez</h4>
                                        <span>Managing Director</span>
                                    </div>
                                </div>
                                <div className="right-info">
                                    <Image src="/assets/img/signature.png" alt="Signature" width={2000} height={700} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutV3;