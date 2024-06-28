import { Client } from "@notionhq/client";

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
        console.log('Here is the individual page:🚀', page)
        return {
          id: page.id,
          title: page.properties.Title?.rich_text[0]?.plain_text,
          content: page.properties.Content?.rich_text[0]?.plain_text,
        };
    });
}