import React from 'react'
import { getAllBlogs } from '@/lib/notion'

const AllBlogs = async() => {
    //get the data here
    const blogs = await getAllBlogs()
    // console.log('Here goes all the blogs:', JSON.stringify(blogs))
  return (
    <>
        <div>AllBlogs</div>
        <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={`/blogs/${blog.id}?author=${blog.author}&createdAt=${blog.createdAt}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllBlogs