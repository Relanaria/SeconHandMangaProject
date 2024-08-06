import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useGetFavourites } from '../../hooks/useFavourite';
import { useDeleteFavourite } from '../../hooks/useFavourite';

import Spinner from '../spinner/Spinner';
import './profilePage.css';

const ProfilePage = () => {
    const authUserContext = useAuthContext();
    const [isFetching, setIsFetching] = useState(true);
    const [favorites, setFavorites] = useGetFavourites(authUserContext.userId, setIsFetching);
    
    const deleteHandleClick = useDeleteFavourite(setFavorites);
    
    useEffect(() => {
        return () => {
            // Cleanup function
        };
    }, []);

    return (
        <div className="profile-page">
            <div className="profile-info">
                <h2>Profile Info</h2>
                <p><strong>Username:</strong> {authUserContext.username}</p>
                <p><strong>Email:</strong> {authUserContext.email}</p>
            </div>
            <div className="favorites-section">
                <h2>Favorites</h2>
                <div className="favorites-list">
                    {favorites.length > 0 ?  favorites.map(fav => (
                        <div key={fav.manga._id} className="favorite-item">
                            <img src={fav.manga.imgUrl} alt={fav.manga.title} className="favorite-img" />
                            <h3 className="favorite-title">{fav.manga.title}</h3>
                            <p className="favorite-author">{fav.manga.author}</p>
                            <div className="favorite-actions">
                                <Link to={`/catalog/${fav.manga._id}/details`} className="details-btn">Details</Link>
                                <button className="remove-btn" onClick={() => deleteHandleClick(fav._id, authUserContext.accessToken)}>Remove</button>
                            </div>
                        </div>
                    )) : 
                    (isFetching && favorites.length <= 0) ? <Spinner/> : 'No manga added to favourites!'
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
