import { useState, useEffect } from "react";

import mangaAPI from "../api/manga-api";
const directory = 'catalogList';
const directoryForHomePage = 'catalogList?sortBy=_createdOn%20desc&pageSize=3';

export function useGetAllMangaCatalog(){
    const [mangaBooks, setMangaBooks] = useState([]);

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directory);
            setMangaBooks(result);
        })();
    }, []);

    return [mangaBooks, setMangaBooks];
};

export function useGetAllMangaCatalogLatest() {
    const [mangaBooks, setMangaBooks] = useState([]);

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directoryForHomePage);
            setMangaBooks(result);
        })();
    }, []);

    return [mangaBooks, setMangaBooks];
}


export function useGetOneMangaCatalog(mangaId, setIsPending) {
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