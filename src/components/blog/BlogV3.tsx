import BlogV3ata from "@/assets/jsonData/blog/BlogV3ata.json"
import SingleBlogV3 from "./SingleBlogV3";

const BlogV3 = () => {
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
                        {BlogV3ata.map(blog =>
                            <div className="col-lg-6 col-md-6 mb-30 wow fadeInUp" key={blog.id}>
                                <SingleBlogV3 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV3;