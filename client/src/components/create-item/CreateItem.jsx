// src/listProduct/ListProduct.jsx
import { useState } from "react";
import "./createItem.css"

export default function CreateItem() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [genres, setGenres] = useState([]);
    const [volume, setVolume] = useState("");
    const [state, setState] = useState("");

    const handleGenreChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setGenres(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const manga = {
            title,
            author,
            description,
            genres,
            volume: parseInt(volume, 10),
            state
        };
        console.log(manga);
        // Send manga object to the server here
    };

    return (
        <div className="create-item-container">
        <h1>List a New Product</h1>
        <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description"></textarea>

            <label htmlFor="genres">Genres:</label>
            <select id="genres" name="genres" multiple>
                <option value="fantasy">Fantasy</option>
                <option value="adventure">Adventure</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="romance">Romance</option>
            </select>

            <label htmlFor="volume">Volume:</label>
            <input type="number" id="volume" name="volume" />

            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" />

            <button type="submit">Submit</button>
        </form>
    </div>
    );
}
