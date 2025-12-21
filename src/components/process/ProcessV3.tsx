import Image from "next/image";
import ProcessV3Data from "@/assets/jsonData/process/ProcessV3Data.json"
import SingleProcessV3 from "./SingleProcessV3";

const ProcessV3 = () => {
    return (
        <>
            <div className="process-style-three-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Our Process</h4>
                                <h2 className="title split-text">Steps of Recruitment <br /> work process</h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="process-style-three-items">
                                {ProcessV3Data.map(process =>
                                    <SingleProcessV3 process={process} key={process.id} />
                                )}
                                <div className="process-arrow">
                                    <Image src="/assets/img/shape/process-arrow.svg" alt="Image Not Found" width={475} height={700} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV3;