import BlogStandardContent from "@/components/blog/BlogStandardContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

const BlogStandardPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog Grid" breadCrumb="blog-2-column" />
                <BlogStandardContent />
            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;