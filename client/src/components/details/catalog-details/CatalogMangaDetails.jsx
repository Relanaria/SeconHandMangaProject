import React, { useContext, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import userContext from '../../../contexts/AuthContext';

import { useGetOneMangaCatalog } from '../../../hooks/useMangaCatalog';
import { useAuthContext } from '../../../contexts/AuthContext';

import Spinner from '../../spinner/Spinner';

import './CatalogMangaDetails.css';

export default function CatalogMangaDetails(props){
    const { mangaId } = useParams();
    const [isPending, setIsPending] = useState(true);
    const [manga, setManga] = useGetOneMangaCatalog(mangaId, setIsPending);
    const authUserContext = useAuthContext();


    const [newComment, setNewComment] = useState('');

    const commentSubmitHandler = (e) =>{
        e.preventDefault();
        console.log('Comment Submited');
        console.log(newComment);
    }


    return ( (
        <>
            {isPending ? <Spinner /> : (
                <div className="details-container">
                    <div className="manga-details">
                        <div className="manga-image">
                            <img src={manga.imgUrl} alt={manga.title} />
                        </div>
                        <div className="manga-info">
                            <h2 className="manga-title">Title: {manga.title}</h2>
                            <h3 className="manga-author">Author: {manga.author}</h3>
                            <p className="manga-description">Description: {manga.description}</p>
                            {authUserContext.isAuthenticated ?<>
                            <button className="favorite-btn" onClick={() => addToFavorites(manga._id)}>⭐</button>
                            <div className="owner-actions">
                                <Link to={`/edit/${manga._id}`} className="edit-btn">Edit</Link>
                                <button className="delete-btn" onClick={() => deleteManga(manga._id)}>Delete</button>
                            </div>
                            </>
                            : 
                            ''
                            }
                
                        </div>
                    </div>
                    <div className="comments-section">
                        <h3 className="comments-title">Comments:</h3>
                        <div className="comments-list">
                                <div  className="comment-item">
                                    <p className="comment-content">Some Comment</p>
                                </div>
                        </div>
                        {authUserContext.isAuthenticated ?
                        <form className="add-comment-section" onSubmit={commentSubmitHandler}>
                            <h3 className="add-comment-title">Add new comment:</h3>
                            <textarea
                                className="new-comment-input"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            ></textarea>
                            <button type="submit" className="add-comment-btn">Add Comment</button>
                        </form> 
                        : 
                        ''
                        }
                        
                    </div>
                </div>
            )}
        </>
    )
    )
}