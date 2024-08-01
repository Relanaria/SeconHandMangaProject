import React, { useContext, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import userContext from '../../../contexts/userContext';

import mangaAPI from '../../../api/manga-api';

import Spinner from '../../spinner/Spinner';

import './CatalogMangaDetails.css';

export default function CatalogMangaDetails(props){
    const [manga, setManga] = useState({});
    const [isPending, setIsPending] = useState(false);
    const { mangaId } = useParams()
    const directory = 'productList';

    useEffect(()=>{
        (async ()=>{
            const result = await mangaAPI.getMangaById(directory, mangaId);
            setIsPending(true)
            setManga(result);
        })();
    },[])

    return (
        <>
        {isPending ?
        (<div className="details-container">
        <div className="manga-details">
            <div className="manga-image">
                <img src={manga.imgUrl} alt={manga.title} />
            </div>
            <div className="manga-info">
                <h2 className="manga-title">Title: {manga.title}</h2>
                <h3 className="manga-author">Author: {manga.author}</h3>
                <p className="manga-description">Description: {manga.description}</p>
                <button className="favorite-btn" onClick={() => addToFavorites(manga._id)}>⭐</button>
            </div>
        </div>
    </div>)
    :
    <Spinner/ >}
    </>
    )
}