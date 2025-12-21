import TeamV3Data from "@/assets/jsonData/team/TeamV3Data.json";
import SingleTeamV3 from "./SingleTeamV3";

interface DataType {
    hasTitle?: boolean;
    fullTeam?: boolean;
}

const TeamV3 = ({ hasTitle, fullTeam }: DataType) => {

    // Conditional data
    const teamList = fullTeam ? TeamV3Data : TeamV3Data.slice(0, 4);

    return (
        <>
            <div className="team-style-three-area default-padding text-center">

                {hasTitle && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Team Members</h4>
                                    <h2 className="title split-text">Our awesome technology <br /> Team experts</h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container">
                    <div className="team-style-three-items">
                        <div className="row">
                            {teamList.map(team =>
                                <div className="col-xl-3 col-lg-6 col-md-6 team-style-three-item" key={team.id}>
                                    <SingleTeamV3 team={team} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3;