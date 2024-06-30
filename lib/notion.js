import { Client } from "@notionhq/client";

//function to format the time according to india
const formatTime = (unformattedTime) => {
    const utcDate = new Date(`${unformattedTime}`);
    const options = { 
        timeZone: 'Asia/Kolkata',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      };
      const istDate = utcDate.toLocaleString('en-IN', options);
    //   console.log(istDate);
      return istDate
}

//Initialize the Notion client with the integration token
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

// Function to fetch all blogs from the Notion database
export const getAllBlogs = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log('Here is the response from the notion databases:🧊', JSON.stringify(response))

    // Map over the response results to get the required data
    return response.results.map((page) => {
        // console.log('Here is the individual page:🚀', page)
        console.log('Here is the thing:', page?.cover?.external?.url)
        return {
          id: page.id,
          title: page.properties.Title?.rich_text[0]?.plain_text,
          content: page.properties.Content?.rich_text[0]?.plain_text,
          createdAt: formatTime(page.created_time),
          author: page.properties.Author?.rich_text[0].plain_text,
          coverImage: page?.cover?.external?.url,
          icon: page?.icon?.emoji
        };
    });
}

export async function getPageBlocks(blockId) {
    // Initialize an empty array to store the blocks
    const blocks = [];

    // Initialize the cursor to manage pagination
    let cursor;

    // Loop to fetch blocks, will break once all blocks are fetched
    while (true) {
        // Fetch blocks from the Notion API using the blockId and cursor for pagination
        const { results, next_cursor } = await notion.blocks.children.list({
            block_id: blockId,  // The ID of the block to retrieve children blocks from
            start_cursor: cursor,  // The cursor for the current batch of results
        });
        
        // Append the fetched blocks to the blocks array
        blocks.push(...results);
        
        // If there is no next_cursor, it means we've fetched all blocks, so break the loop
        if (!next_cursor) break;
        
        // Set the cursor to the next_cursor for the next batch of results
        cursor = next_cursor;
    }
        // Return the array containing all the blocks
        return blocks;
}

