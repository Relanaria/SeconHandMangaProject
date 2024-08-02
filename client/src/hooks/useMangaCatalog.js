import { useState, useEffect } from "react";

import mangaAPI from "../api/manga-api";

export function useGetAllMangaCatalog(){
    const [mangaBooks, setMangaBooks] = useState([]);
     const directory = 'catalogList';

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directory);
            setMangaBooks(result);
        })();
    }, []);


    return [mangaBooks, setMangaBooks];
}