import { useState, useEffect } from "react";

import favouriteAPI from "../api/favourite-api";


export function useCreateFavourite(){

    const createFavourite = async (mangaData, accessToken) =>{
        
        const newFavouriteManga = {
            manga: mangaData
        }

        const result = await favouriteAPI.addMangaToFavourite(newFavouriteManga, accessToken)
        
        if(result.code == 401){
            throw new Error("Unauthorized");
        }
        return result;
    };

    return createFavourite;
}