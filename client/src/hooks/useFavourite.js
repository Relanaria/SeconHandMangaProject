import { useState, useEffect } from "react";

import favouriteAPI from "../api/favourite-api";

export function useCreateFavourite() {
  const createFavourite = async (mangaData, accessToken) => {
    const newFavouriteManga = {
      manga: mangaData,
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

export function useGetFavourites(ownerId) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    (async () => {
      const encodedOwnerId = encodeURIComponent(`"${ownerId}"`);

      const result = await favouriteAPI.getAllFavourites(encodedOwnerId);

      setFavourites(result);
    })();
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
