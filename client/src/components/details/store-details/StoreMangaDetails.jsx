import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetOneMangaStore } from '../../../hooks/useMangaStore';

import Spinner from '../../spinner/Spinner';

import './StoreMangaDetails.css';

export default function StoreMangaDetails(props){
    const { mangaId } = useParams()
    const [isPending, setIsPending] = useState(false);
    const [manga, setManga] = useGetOneMangaStore(mangaId, setIsPending);

    return (
        <>
        {isPending ? 
         <div className="details-container">
         <div className="manga-details">
             <div className="manga-image">
                 <img src={manga.imgUrl} alt={manga.title} />
             </div>
             <div className="manga-info">
                 <h2 className="manga-title">Title: {manga.title}</h2>
                 <h3 className="manga-author">Author: {manga.author}</h3>
                 <p className="manga-description">Description: {manga.description}</p>
                 <p className="manga-price">State: {manga.state}</p>
                 <p className="manga-price">Price: ${manga.price}</p>
 
                     <div className="actions">
                         <button className="btn buy-btn" onClick={() => buyManga(manga._id)}>Buy</button>
                         <Link to={`/edit/${manga._id}`} className="btn edit-btn">Edit</Link>
                         <button className="btn delete-btn">Delete</button>
                     </div>
         
                 <button className="favorite-btn" onClick={() => addToFavorites(manga._id)}>⭐</button>
             </div>
         </div>
     </div>
        :
            <Spinner/>
        }
        </>
    )
}