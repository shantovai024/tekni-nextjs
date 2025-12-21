import AchievementFact from "../fact/AchievementFact";
import AchievementData from "@/assets/jsonData/achievement/AchievementData.json"

const CtaV1 = () => {
    return (
        <>
            <div className="request-call-back-area bg-dark text-light default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2 className="title split-text">Looking for a First-Class <br /> Business Consultant?</h2>
                            <a className="btn btn-theme btn-md radius animation wow fadeInUp" data-wow-delay="100ms" href="contact-us.html">Request a Call</a>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="achivement-counter text-light">
                                <ul>
                                    {AchievementData.map(achievement =>
                                        <AchievementFact achievement={achievement} key={achievement.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaV1;