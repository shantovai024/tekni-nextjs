import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";

const ProjectDetailsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Our Projects" breadCrumb="project-details" />
                <ProjectDetailsContent />
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;