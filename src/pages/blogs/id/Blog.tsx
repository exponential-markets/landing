import { blogs } from "@/constants/blogs";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.filter((blog) => blog.id === id)[0];
  return (
    <div className="pt-40">
      <div className="flex flex-col gap-6">
        <h1
          className="md:px-20 min-[820px]:px-40 text-3xl font-medium md:text-[42px] lg:text-5xl xl:text-5xl xl:leading-[1.2] text-center"
          dangerouslySetInnerHTML={{ __html: blog.title }}
        />
        <div className="px-20">
          <img
            src={blog.image}
            alt={blog.imageAlt}
            className="max-w-[70%] rounded-xl mx-auto"
          />
        </div>
        {blog.content.map((content) => (
          <div key={content.title} className="md:px-20 min-[820px]:px-40">
            {content.subtitle && (
              <h2 className="text-xl font-medium md:text-[30px] lg:text-2xl xl:leading-[1.2]">
                {content.subtitle}
              </h2>
            )}
            {content.title && (
              <h2 className="text-2xl font-medium md:text-[30px] lg:text-4xl xl:leading-[1.2]">
                {content.title}
              </h2>
            )}
            <div
              className="flex flex-col gap-4 text-sm mt-6 text-muted-foreground text-pretty"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
