import React from 'react'
import { getAllBlogs } from '@/lib/notion'

const AllBlogs = async() => {
    //get the data here
    const blogs = await getAllBlogs()
  return (
    <>
        <div>AllBlogs</div>
        <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={`/blogs/${blog.id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllBlogs