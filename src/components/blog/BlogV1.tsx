import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import SingleBlogV1 from "./SingleBlogV1";

const BlogV1 = () => {
    return (
        <>
            <div className="home-blog-area default-padding bottom-less bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner.jpg)' }}>
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

                        {BlogV1Data.slice(0, 3).map(blog =>
                            <div className="col-xl-4 col-md-6 mb-30 wow fadeInUp" data-wow-delay="300ms" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;