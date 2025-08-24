import { FaRegNewspaper } from "react-icons/fa";

const BlogSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500">
      <FaRegNewspaper size={100} />
      <p className="mt-4 text-xl font-medium">No blog posts yet</p>
      <p className="mt-1 text-sm text-gray-400">
        Stay tuned for upcoming content!
      </p>
    </div>
  );
};

export default BlogSection;
