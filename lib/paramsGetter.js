'use client'
import { useParams } from "next/navigation";
import { useEffect } from "react";

//function that will return me the params from the url
const getParams = () => {
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        return id
    },[id])
}

export default getParams
