import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-16 mt-36 text-black text-center font-medium max-md:mt-10 max-md:px-2">
      <h1 className="text-lg text-gray-700">BLOG & NEWS</h1>
      <h2 className="mt-4 text-3xl font-bold text-black max-md:text-2xl">Blog & Articles</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-9">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogSection;
