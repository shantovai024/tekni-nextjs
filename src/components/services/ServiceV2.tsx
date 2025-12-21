import ServicesV2Data from "@/assets/jsonData/services/ServicesV2Data.json"
import SingleServiceV2 from "./SingleServiceV2";

const ServiceV2 = () => {
    return (
        <>
            <div className="services-style-two-area default-padding bottom-less bg-cover bg-gray"
                style={{ backgroundImage: 'url(/assets/img/shape/27.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">What we do</h4>
                                <h2 className="title split-text">Technical solutions that helps Tech business.</h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServicesV2Data.map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServiceV2 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV2;