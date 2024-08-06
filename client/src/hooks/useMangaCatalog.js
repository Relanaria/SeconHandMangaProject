import { useState, useEffect } from "react";

import mangaAPI from "../api/manga-api";
const directory = 'catalogList';
const directoryForHomePage = 'catalogList?sortBy=_createdOn%20desc&pageSize=3';

export function useGetAllMangaCatalog(setIsFetching){
    const [mangaBooks, setMangaBooks] = useState([]);

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directory);
            setIsFetching(false);
            setMangaBooks(result);
        })();
    }, []);

    return mangaBooks;
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


export function useDeleteManga(){

    const deleteManga = async (mangaId, accessToken) => {
      const result = await mangaAPI.deleteManga(directory, mangaId, accessToken);
      
      if(result.code == 401){
          throw new Error("Unauthorized");
      };
      if(result.code == 403){
          throw new Error('Edit action not authorized!');
      };
    };
  
    return deleteManga;
  }