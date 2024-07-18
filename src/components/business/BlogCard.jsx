import React from "react";

const BlogCard = () => {
  return (
    <div className="flex flex-col w-full max-w-[45%] m-4 md:m-6 max-md:w-full">
      <div className="bg-white rounded-md shadow-lg overflow-hidden">
        <div className="flex gap-4 p-5 max-md:flex-col max-md:gap-0">
          <div className="w-1/3 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?apiKey=46346ef9d373469da9420a0f5077d52a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41c0bae920c24956611e16211bb92ad0967f86fb40e60005c2700accd46ee36a?"
              className="w-full h-full object-cover max-md:aspect-square"
              alt="Blog"
            />
          </div>
          <div className="flex flex-col w-2/3 max-md:w-full">
            <div className="flex items-center gap-2 mb-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/127dd6b26674a519ef8fd56d0c021bbb9f862acad5585b10aeee88912ba8d59c?apiKey=46346ef9d373469da9420a0f5077d52a&"
                className="w-5 h-5"
                alt="User"
              />
              <span className="text-gray-500">user</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Which allows you to pay down insurance bills
            </h3>
            <p className="mt-2 text-gray-600">
              Ullamcorper a lacus vestibulum sed arcu non odio. Nulla porttitor
              massa id.
            </p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded-md self-start">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
