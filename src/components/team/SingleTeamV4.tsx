import Image from "next/image";
import Link from "next/link";
import SocialShareV3 from "../social/SocialShareV3";

interface DataType {
    id: number;
    thumb: string;
    role: string;
    name: string;
}

const SingleTeamV4 = ({ team }: { team: DataType }) => {
    const { id, thumb, name, role } = team

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={900} />
                    <span>{role}</span>
                </div>
                <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                <div className="social-overlay">
                    <ul>
                        <SocialShareV3 />
                    </ul>
                    <div className="icon">
                        <i className="fas fa-plus" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV4;