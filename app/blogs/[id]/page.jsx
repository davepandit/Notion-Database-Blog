import React from 'react'
import { getAllBlogs , getPageBlocks } from '@/lib/notion'
import Image from 'next/image';



const SingleBlog = async({params , searchParams}) => {
    // console.log('Here is the serachParams:', searchParams)
    const author = searchParams.author
    const createdAt = searchParams.createdAt
    // doubt why cant I use the function in order to get the id 

    //find the blog from all the blogs which have the id as that of the id form the params
    const allblogs = await getAllBlogs()
    // find the blog that has the id as that coming from the url and then take out the cover image and the icon from there 
    
    // const blog = blogs.find((blog)=> blog.id == params.id)
    // console.log('Here is the blog that we have been searching for:🚀', blog)
    console.log('Here are all the blogs:',allblogs)

    const searchId = '506212c8-8ebb-481d-aeee-3198017cab83';

    // Use the find method to get the object with the matching ID
    const foundBlog = allblogs.find(blog => blog.id === params.id);

    if (foundBlog) {
    console.log('Found Blog❤️:', foundBlog);
    } else {
    console.log('Blog not found');
    }



    //get the block data basically ek page ke multiple blocks hote hai so basiscally uahan par hum blocks ko fetch karne ka kaam karenge
    const blocks = await getPageBlocks(params.id)
    // console.log('Here is all the blocks data:😎', JSON.stringify(blocks))

  return (
    <>
        {/* <div>SingleBlog</div>
        <div>
            The title of the blog is:{blog.title}
        </div>
        <div>
            {blog.content}
        </div>
        <div>
            Author is:{author}
        </div>
        <div>
            Created At:{createdAt}
        </div> */}
        <div>
            {foundBlog.icon}
        </div>
        <div>
            <img src={foundBlog.coverImage} alt="image" />
        </div>
    
        <div>
            {
                // the blocks which we got is basically an array so map through them and render them 
                blocks.map((block)=>{
                    switch (block.type) {
                        case 'paragraph':
                          return <p key={block.id}>{block.paragraph.rich_text[0]?.text.content}</p>;
                        case 'heading_1':
                          return <h1 key={block.id}>{block.heading_1.rich_text[0]?.text.content}</h1>;
                        case 'heading_2':
                          return <h2 key={block.id}>{block.heading_2.rich_text[0]?.text.content}</h2>;
                        case 'heading_3':
                          return <h3 key={block.id}>{block.heading_3.rich_text[0]?.text.content}</h3>;
                        case 'image':
                          const imageUrl = block.image.type === 'external' 
                            ? block.image.external.url 
                            : block.image.file.url;
                          return (
                            <img 
                              key={block.id} 
                              src={imageUrl} 
                              alt={block.image.caption[0]?.plain_text || 'Notion Image'} 
                            />
                          );
                        default:
                          return <div key={block.id}>Unsupported block type: {block.type}</div>;
                    }
                })
            }
        </div>
        <div>
            Author is:{author}
        </div>
        <div>
            Created At:{createdAt}
        </div>
    </>
  )
}

export default SingleBlog