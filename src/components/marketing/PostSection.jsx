import React from 'react';

const posts = [
  {
    id: 1,
    category: 'Marketing',
    date: 'September 1, 2022',
    title: 'How to increase your Twitter reach by over 200% with this simple trick',
    imageUrl: 'your-image-url.jpg',
  },
  {
    id: 2,
    category: 'Marketing',
    date: 'September 1, 2022',
    title: 'How to increase your Twitter reach by over 200% with this simple trick',
    imageUrl: 'your-image-url.jpg',
  },
  {
    id: 3,
    category: 'Marketing',
    date: 'September 1, 2022',
    title: 'How to increase your Twitter reach by over 200% with this simple trick',
    imageUrl: 'your-image-url.jpg',
  },
  {
    id: 4,
    category: 'Marketing',
    date: 'September 1, 2022',
    title: 'How to increase your Twitter reach by over 200% with this simple trick',
    imageUrl: 'your-image-url.jpg',
  },
  {
    id: 5,
    category: 'Marketing',
    date: 'September 1, 2022',
    title: 'How to increase your Twitter reach by over 200% with this simple trick',
    imageUrl: 'your-image-url.jpg',
  },
  {
    id: 6,
    category: 'Marketing',
    date: 'September 1, 2022',
    title: 'How to increase your Twitter reach by over 200% with this simple trick',
    imageUrl: 'your-image-url.jpg',
  },
];

function PostSection() {
  return (
    <div className="container py-8">
        <div className='flex flex-row justify-between mx-60'>
      <h1 className="text-3xl font-bold mb-6">Latest posts</h1>
      <div className="mb-4">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md mr-2">All</button>
        <button className="bg-white text-gray-800 border px-4 py-2 rounded-md mr-2">Growth</button>
        <button className="bg-white text-gray-800 border px-4 py-2 rounded-md mr-2">Content</button>
        <button className="bg-white text-gray-800 border px-4 py-2 rounded-md">Social Media</button>
      </div>
      </div>
      <div className='mt-16 flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[1000px] ">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg border-2 p-4">
            <img src={post.imageUrl} alt="Post" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="mt-4">
            <div className='flex flex-row justify-between'>
              <span className="text-gray-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded-full border">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">{post.date}</span>
              </div>
              <h2 className="text-lg font-bold mt-2">{post.title}</h2>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default PostSection;
