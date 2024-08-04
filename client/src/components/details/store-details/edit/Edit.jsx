import React, { useState, useEffect } from 'react';
import { useForm } from '../../../../hooks/useForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useEditManga } from '../../../../hooks/useMangaStore';
import { useAuthContext } from '../../../../contexts/AuthContext';

import './editMangaPage.css';

export default function EditMangaPage  ()  {
    const {mangaId} = useParams();
    const location = useLocation();
    const currentManga = location.state.mangaDetails;
    const navigate = useNavigate();
    const authUserContext = useAuthContext();

    const editManga = useEditManga();
    
    const initialValues = {
        title: currentManga.title,
        author: currentManga.author,
        description: currentManga.description,
        genre: currentManga.genre,
        imgUrl: currentManga.imgUrl,
        volume: currentManga.volume,
        price: currentManga.price,
        state: currentManga.state,
    }

    const {values, changeHandler, submitHandler} = useForm(initialValues, async (mangaData) => {
        
            try {
                await editManga(mangaId, mangaData, authUserContext.accessToken)
                navigate(`/store/${mangaId}/details`);
            } catch (error) {
                alert(error.message);
            }
    })

    return (
        <div className="edit-manga-page">
            <h2 className="edit-title">Edit Manga</h2>
            <form onSubmit={submitHandler} className="edit-form">
                <div className="edit-form-group">
                    <label htmlFor="title" className="edit-label">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="author" className="edit-label">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={values.author}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="description" className="edit-label">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        required
                        className="edit-textarea"
                    ></textarea>
                </div>
                <div className="edit-form-group">
                    <label htmlFor="genre" className="edit-label">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={values.genre}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="volume" className="edit-label">Volume:</label>
                    <input
                        type="number"
                        id="volume"
                        name="volume"
                        value={values.volume}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="price" className="edit-label">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={values.price}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="state" className="edit-label">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="imgUrl" className="edit-label">Image URL:</label>
                    <input
                        type="text"
                        id="imgUrl"
                        name="imgUrl"
                        value={values.imgUrl}
                        onChange={changeHandler}
                        required
                        className="edit-input"
                    />
                </div>
                <button type="submit" className="edit-submit-btn">Save Changes</button>
            </form>
        </div>
    );
};