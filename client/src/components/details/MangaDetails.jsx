import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../contexts/userContext';
import './mangaDetails.css';

export default function MangaDetails(props){
    const userData = {
        user: true,
    };

    return (
      <div className="details-container">
            <h1>Details Page</h1>
            <div className="manga-details">
                <div className="manga-image">
                    <img src={manga.imageUrl} alt={manga.title} />
                </div>
                <div className="manga-info">
                    <h2>{manga.title}</h2>
                    <h3>{manga.author}</h3>
                    <p>{manga.description}</p>
                    <p>Price: ${manga.price}</p>
                    {userData.user && userData.user._id === manga.owner && (
                        <div className="actions">
                            <Link to={`/edit/${manga._id}`} className="btn">Edit</Link>
                            <button className="btn">Delete</button>
                        </div>
                    )}
                    <button className="favorite-btn" onClick={() => addToFavorites(manga._id)}>⭐</button>
                </div>
            </div>
        </div>
    )
}