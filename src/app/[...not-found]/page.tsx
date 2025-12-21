import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import NotFoundContent from "@/components/error/NotFoundContent";
import LayoutV1 from "@/components/layouts/LayoutV1";

const NotFoundPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Error Page" breadCrumb="non-found" />
                <NotFoundContent />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;