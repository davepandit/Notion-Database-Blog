import Image from "next/image";
import { getAllBlogs } from '@/lib/notion'
import MediaCard from "@/components/Card";

export default async function Home() {
  //get all the blogs
  const blogs = await getAllBlogs()
  return (
    <div className="w-full pl-11 pr-11 mt-4 flex flex-col gap-4 items-center mb-28">
      <div className="text-center text-3xl md:text-5xl font-bold text-black ">
        Discover my tech blogs📰
      </div>
      <div className="text-xl font-bold mt-7 bg-yellow-200">
        Here are all the blogs
      </div>

      {/* render all the blogs  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          
          <div key={blog.id}>
            <MediaCard title={blog.title} id={blog.id} author={blog.author} createdAt={blog.createdAt} coverImage={blog.coverImage}/>
          </div>
        ))}
      </div>
    </div>
  );
}


// <li key={blog.id}>
          //   <a href={`/blogs/${blog.id}?author=${blog.author}&createdAt=${blog.createdAt}`}>{blog.title}</a>
          // </li>