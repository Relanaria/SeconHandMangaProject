import { useState, useEffect } from "react";

import mangaAPI from "../api/manga-api";

const directory = 'productList';
const directoryForHomePage = 'productList?sortBy=_createdOn%20desc&pageSize=3';

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

export function useGetAllMangaStoreLatest() {
    const [mangaBooks, setMangaBooks] = useState([]);

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directoryForHomePage);
            setMangaBooks(result);
        })();
    }, []);


    return [mangaBooks, setMangaBooks];
}


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

export function useEditManga(){
    const editManga = async (mangaId, data, accessToken) =>{
       const result = await mangaAPI.editManga(directory, mangaId, data, accessToken);

       if(result.code == 401){
        throw new Error("Unauthorized");
       };
    }

    return editManga;
}


export function useDeleteManga(){

  const deleteManga = async (mangaId, accessToken) => {
    console.log(mangaId, accessToken);
    
    const result = await mangaAPI.deleteManga(directory, mangaId, accessToken);
  };

  return deleteManga;
}