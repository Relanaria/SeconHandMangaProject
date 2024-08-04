import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/favourites';


export const addMangaToFavourite = (data, accessToken) => request.post(BASE_URL, data, accessToken);


const favouriteAPI = {
    addMangaToFavourite
};


export default favouriteAPI;