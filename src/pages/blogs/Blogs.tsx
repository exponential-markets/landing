import { Button } from "@/components/ui/button";
import { getRelativeTime } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    imageAlt: "random",
    readTime: "5 min read",
    date: "2024-10-05", // YYYY-MM-DD
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 md:px-20 min-[820px]:px-24 flex flex-col items-center">
      <div className="xl:px-12 text-3xl font-medium text-center md:text-[42px] lg:text-5xl xl:text-6xl xl:leading-[1.2]">
        Insights & Updates: Explore Our Latest Blog Posts
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-16">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-2">
            <img
              src={blog.image}
              alt={blog.imageAlt}
              className="w-full h-60 object-cover"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm">{blog.readTime}</p>
              <p className="text-sm">{getRelativeTime(blog.date)}</p>
            </div>
            <h3 className="text-2xl">{blog.title}</h3>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <Button
              onClick={() => {
                navigate(`/blogs/${blog.id}`);
              }}
              variant="link"
              className="w-fit p-0"
            >
              Read More <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
