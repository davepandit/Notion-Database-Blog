import React from 'react'
import { getAllBlogs } from '@/lib/notion'



const SingleBlog = async({params}) => {
    // doubt why cant I use the function in order to get the id 

    //find the blog from all the blogs which have the id as that of the id form the params
    const blogs = await getAllBlogs()
    const blog = blogs.find((blog)=> blog.id == params.id)
    console.log('Here is the blog that we have been searching for:🚀', blog)
  return (
    <>
        <div>SingleBlog</div>
        <div>
            The title of the blog is:{blog.title}
        </div>
        <div>
            {blog.content}
        </div>
    </>
  )
}

export default SingleBlog