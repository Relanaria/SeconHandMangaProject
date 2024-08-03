// src/listProduct/ListProduct.jsx
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

import { useCreateManga } from "../../hooks/useCreateManga";
import { useAuthContext } from "../../contexts/AuthContext";

import "./createItem.css"

export default function CreateItem() {
    const navigate = useNavigate();
    const initialValues = {
        title: "",
        author: "",
        description: "",
        genres: "",
        imageUrl: "",
        volume: "",
        price: "",
        state: "",
    }
    const AuthUserData = useAuthContext();
    const create = useCreateManga();

    const {values, changeHandler, submitHandler} = useForm(initialValues, async (mangaData) => {

        try {
           const createdManga = await create(mangaData, AuthUserData.accessToken);
            
           navigate(`/store/${createdManga._id}/details`)
        } catch (error) {
            alert(error.message)
        }
    })

    return (
        <div className="create-item-container">
        <h1>List a New Product</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Title:</label>
            <input 
            placeholder="title" 
            type="input" 
            id="title" 
            name="title"
            value={values.title}
            onChange={changeHandler}
            />

            <label htmlFor="author">Author:</label>
            <input 
            placeholder="author" 
            type="text" 
            id="author" 
            name="author"
            value={values.author}
            onChange={changeHandler}
            />

            <label htmlFor="description">Description:</label>
            <textarea 
            placeholder='description' 
            id="description" 
            name="description"
            value={values.description}
            onChange={changeHandler}
            ></textarea>

            <label htmlFor="genres">Genres:</label>
            <select id="genres" name="genres" onChange={changeHandler} multiple>
                <option value="fantasy">Fantasy</option>
                <option value="adventure">Adventure</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="romance">Romance</option>
            </select>

            <label htmlFor="imageUrl">ImageURL:</label>
            <input 
            placeholder="imageUrl" 
            type="text" 
            id="imageUrl" 
            name="imageUrl"
            value={values.ImageUrl}
            onChange={changeHandler}
            />

            <label htmlFor="volume">Volume:</label>
            <input 
            placeholder="volume" 
            type="number" 
            id="volume" 
            name="volume"
            value={values.volume}
            onChange={changeHandler}
            />

            <label htmlFor="state">State:</label>
            <input 
            placeholder="state" 
            type="text" 
            id="state" 
            name="state"
            value={values.state}
            onChange={changeHandler}
            />

            <label htmlFor="price">Price:</label>
            <input 
            placeholder="price" 
            type="number" 
            id="price" 
            name="price"
            value={values.price}
            onChange={changeHandler}
            />

            <button type="submit">Submit</button>
        </form>
    </div>
    );
}
