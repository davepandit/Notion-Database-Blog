// using this api route we can get the page content and all sort of images and stuffs 

import { getPageBlocks } from "@/lib/notion";

export const GET = async(request , {params}) => {
    //get the params
    const {id} = params
    
    try {
        const response = await getPageBlocks(id)
        if(response){
            // send the json response 
            return new Response(JSON.stringify(response), {status:200})
        }
    } catch (error) {
        return new Response('Error:', error, {status:500})
    }
}