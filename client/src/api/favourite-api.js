import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/favourites';


export const addMangaToFavourite = (data, accessToken) => request.post(BASE_URL, data, accessToken);

export const getAllFavourites = (encodedOwnerId) => request.get(`${BASE_URL}?where=_ownerId%3D${encodedOwnerId}`);

export const deleteFavourite = (favouriteId, accessToken) => request.del(`${BASE_URL}/${favouriteId}`, undefined, accessToken);


const favouriteAPI = {
    addMangaToFavourite,
    getAllFavourites,
    deleteFavourite
};


export default favouriteAPI;