import { useState, useEffect } from "react";

import mangaAPI from "../api/manga-api";

export function useGetAllMangaStore(){
    const [mangaBooks, setMangaBooks] = useState([]);
     const directory = 'productList';

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directory);
            setMangaBooks(result);
        })();
    }, []);


    return [mangaBooks, setMangaBooks];
}