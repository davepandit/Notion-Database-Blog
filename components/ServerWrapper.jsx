import { getPageBlocks } from "@/lib/notion";

export const ServerWrapper = async({id}) => {
    //get the page ka blocks
    const blocks = await getPageBlocks(id)
    //return the blocks so that we can map over it in the card component
    return (
        <>
            {
                blocks?.map((block)=>{
                    switch (block.type){
                        case 'paragraph':
                          return <p key={block.id}>{block.paragraph.rich_text[0]?.text.content}</p>;
                    }
                })
            }
        </>

    )
}