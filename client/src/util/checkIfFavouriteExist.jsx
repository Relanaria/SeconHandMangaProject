import { useState, useEffect } from "react";
import { useGetFavourites } from "../hooks/useFavourite";

export function useCheckFavourite(ownerId, mangaId) {
  const [isExisting, setIsExisting] = useState(false);
  const [favourites, setFavourites] = useGetFavourites(ownerId);

  useEffect(() => {
    console.log(favourites.length);
    console.log(favourites);
    
    
    if (favourites.length > 0) {
      const favouriteExists = favourites.some(favourite => favourite.manga._id === mangaId);
      setIsExisting(favouriteExists);
    }
  }, [favourites, mangaId]);

  return isExisting;
}
