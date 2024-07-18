import React from "react";
import CardBlog from "./CardBlog";

function BlogSection() {
  const cardData = [
    {
      id: 1,
      img: "src/assets/developerimage/blog1.png",
      title: "The Importance Of Web Design",
      desc: "This blog post underscores the importance of web design as an integral part of the marketing strategy."
    },
    {
      id: 2,
      img: "src/assets/developerimage/blog2.png",
      title: "Effective Marketing Strategies",
      desc: "Discover effective marketing strategies to boost your business growth and reach a wider audience."
    },
    {
      id: 3,
      img: "src/assets/developerimage/blog3.png",
      title: "SEO Best Practices",
      desc: "Learn about the best practices for SEO to improve your website's visibility on search engines."
    }
  ];
  
  return (
    <section
      className="py-10 md:py-20 font-sans section flex flex-col gap-6 sm:gap-10 bg-[#F7F7F7] dark:bg-gray-900 section"
      name="blog"
    >
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6 px-4 text-center">
        <p className="text-base md:text-lg dark:text-gray-100">Check out my latest blogs</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Blog</span>
        </h2>
        <div className="w-20 md:w-32 h-1 bg-primary rounded-md"></div>
      </div>
      <div className="flex flex-wrap gap-6 sm:gap-10 justify-center px-4">
        {cardData.map((card) => (
          <CardBlog key={card.id} id={card.id} img={card.img} title={card.title} desc={card.desc} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
