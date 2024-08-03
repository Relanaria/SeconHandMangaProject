import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetOneMangaCatalog } from '../../../hooks/useMangaCatalog';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useCreateComment } from '../../../hooks/useComment';
import { useGetComments } from '../../../hooks/useComment';
import { useForm } from '../../../hooks/useForm';

import Spinner from '../../spinner/Spinner';
import Comment from './comments/comment';

import './CatalogMangaDetails.css';

export default function CatalogMangaDetails(props){
    const { mangaId } = useParams();
    const [isPending, setIsPending] = useState(true);

    const [manga, setManga] = useGetOneMangaCatalog(mangaId, setIsPending);
    const [comments, setComments] = useGetComments(mangaId);
    

    const authUserContext = useAuthContext();

    const createComment = useCreateComment();

    const initialValues = {
        comment: '',
    };

    const {values, changeHandler, submitHandler} = useForm(initialValues, async (commentData) => {
        try {
            const result = await createComment(commentData, mangaId, authUserContext.username, authUserContext.accessToken);
            setComments(oldComments => [...oldComments, result]);
            
        } catch (error) {
            alert(error.message); 
        }
    });



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
                                {authUserContext.accountStatus != undefined ? 
                                    <div className="owner-actions">
                                        <Link to={`/edit/${manga._id}`} className="edit-btn">Edit</Link>
                                        <button className="delete-btn" onClick={() => deleteManga(manga._id)}>Delete</button>
                                    </div>
                                    : 
                                    ' '
                                }
                            
                            </>
                            : 
                            ''
                            }
                
                        </div>
                    </div>
                    <div className="comments-section">
                        <h3 className="comments-title">Comments:</h3>
                        <div className="comments-list">
                            {comments.length > 0 ? 
                            comments.map( comment => <Comment key={comment._id} comment={comment}/>)
                            :
                            "No Comments yet!"
                            }
                               
                        </div>
                        {authUserContext.isAuthenticated ?
                        <form className="add-comment-section" onSubmit={submitHandler}>
                            <h3 className="add-comment-title">Add new comment:</h3>
                            <textarea
                                className="new-comment-input"
                                id="comment"
                                name="comment"
                                value={values.comment}
                                onChange={changeHandler}
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