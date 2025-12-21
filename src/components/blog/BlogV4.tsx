import BlogV4Data from "@/assets/jsonData/blog/BlogV4Data.json"
import SingleBlogV4 from "./SingleBlogV4";

const BlogV4 = () => {
    return (
        <>
            <div className="home-blog-area default-padding bottom-less bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Latest Blog</h4>
                                <h2 className="title split-text">News & Update</h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogV4Data.map(blog =>
                            <div className="col-xl-4 col-md-6 mb-30 wow fadeInUp" key={blog.id}>
                                <SingleBlogV4 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV4;