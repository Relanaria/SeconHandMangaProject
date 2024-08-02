import { useState, useEffect } from "react";

import mangaAPI from "../api/manga-api";

const directory = 'productList';

export function useGetAllMangaStore(){
    const [mangaBooks, setMangaBooks] = useState([]);

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directory);
            setMangaBooks(result);
        })();
    }, []);


    return [mangaBooks, setMangaBooks];
};


export function useGetOneMangaStore(mangaId, setIsPending) {
    const [manga, setManga] = useState({});

    useEffect(()=>{
        (async ()=>{
            const result = await mangaAPI.getMangaById(directory, mangaId);
            setIsPending(false)
            setManga(result);
        })();
    },[])

    return [manga, setManga];
}