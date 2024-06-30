// using this api route we can get the emojis, cover image and the tilte of the blog 

import { getAllBlogs } from "@/lib/notion";

//return the response from the getAllBlogs as a json data
export const GET = async() => {
    try {
        const response = await getAllBlogs()
        if(response){
            //then send the response
            return new Response(JSON.stringify(response), {status:200})
        }
    } catch (error) {
        return new Response('Error:', error, {status:500})
    }
}