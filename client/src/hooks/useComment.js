import { useState, useEffect } from "react";

import commentsAPI from "../api/comments-api";


export const useCreateComment = () =>{

    const createComment = async (commentData, mangaId ,username, accessToken) =>{

        const newCommentData = {
            username,
            mangaId,
            ...commentData
        }

        const result = await commentsAPI.createComment(newCommentData, accessToken);

        if(result.code == 401){
            throw new Error("Unauthorized");
        }
        console.log(result);
        
        if(result.code === 403){
            throw new Error("Invalid accessToken");
        }
        return result;
    };

    return createComment;
};

export const useGetComments = (mangaId) =>{
    const [comments, setComments] = useState([])
    
    useEffect(() =>{
        (async () =>{
            const encodeMangaId = encodeURIComponent(`"${mangaId}"`);
            
            const result = await commentsAPI.getComments(encodeMangaId);
            
            setComments(result);
        })();
    },[])
    
    return [comments, setComments];
}
