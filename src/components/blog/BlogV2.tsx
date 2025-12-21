import BlogV2Data from "@/assets/jsonData/blog/BlogV2Data.json"
import SingleBlogV2 from "./SingleBlogV2";

const BlogV2 = () => {
    return (
        <>
            <div className="home-blog-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Latest Blog</h4>
                                <h2 className="title split-text">News &amp; Update</h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {BlogV2Data.slice(0, 1).map(blog =>
                                <SingleBlogV2 blog={blog} key={blog.id} />
                            )}
                        </div>
                        <div className="col-lg-6 mt-md-30 mt-xs-30">
                            {BlogV2Data.slice(1, 3).map(blog =>
                                <SingleBlogV2 blog={blog} key={blog.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV2;