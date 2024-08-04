import { useState, useEffect } from "react";
import { useGetFavourites } from "../hooks/useFavourite";

export function useCheckFavourite(ownerId, mangaId, setNoFavouritesButton) {
  const [isExisting, setIsExisting] = useState(false);

  const [isFetching, setIsFetching] = useState(true);
  const [favourites, setFavourites] = useGetFavourites(ownerId, setIsFetching);

  useEffect(() => {
    if (favourites.length > 0) {
      const favouriteExists = favourites.some(favourite => favourite.mangaId === mangaId);
      setIsExisting(favouriteExists);
      setNoFavouritesButton(!!favouriteExists)
    }
  }, [favourites, mangaId]);

  return isExisting;
}
