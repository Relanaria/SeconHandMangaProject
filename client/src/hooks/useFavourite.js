import { useState, useEffect } from "react";

import favouriteAPI from "../api/favourite-api";

export function useCreateFavourite() {
  const createFavourite = async (mangaId, accessToken) => {
    const newFavouriteManga = {
      mangaId: mangaId
    };
    
    const result = await favouriteAPI.addMangaToFavourite(
      newFavouriteManga,
      accessToken
    );

    if (result.code == 401) {
      throw new Error("Unauthorized");
    }
    return result;
  };
 
  return createFavourite;
}

export function useGetFavourites(ownerId, setIsFetching) {
  const [favourites, setFavourites] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      const encodedOwnerId = encodeURIComponent(`"${ownerId}"`);
      console.log(signal);
      
      const result = await favouriteAPI.getAllFavourites(encodedOwnerId, signal);
      
      setIsFetching(false);
      setFavourites(result);
    })();

    return () => {
      console.log('Aboard');
      controller.abort();
    };
  }, []);

  return [favourites, setFavourites];
}

export function useDeleteFavourite(setFavorites) {

  const deleteFavourite = async (favouriteId, accessToken) => {
    const result = await favouriteAPI.deleteFavourite(favouriteId, accessToken);
    setFavorites((prevFavourites) => prevFavourites.filter((fav) => fav._id !== favouriteId));
  };

  return deleteFavourite;
}
