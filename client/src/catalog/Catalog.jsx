import React from 'react';
import './catalog.css';
import { useEffect, useState } from 'react';
import CatalotItem from './catalog-item/CatalogItem';

function Catalog() {
    const [mangaBooks, setMangaBooks] = useState([]);
    const mangaList = [
        {
            title: 'Naruto',
            author: 'Author Name 1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg'
        },
        {
            title: 'DoroHedoro',
            author: 'Author Name 2',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzIxODYzMjYtYTU3My00MzU1LWIyYmItZjRjM2NhYTU4NjQxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
        },
        {
            title: 'The Beginning After the End',
            author: 'Author Name 3',
            imageUrl: 'https://m.media-amazon.com/images/I/81jzTuXiB9L._AC_UF1000,1000_QL80_.jpg'
        }
    ];
    const baseUrl = 'http://localhost:3030/jsonstore/manga/mangas';

    useEffect(() => {

        (async () =>{
            const response = await fetch(baseUrl);
            const result = await response.json();
            setMangaBooks(Object.values(result));
        })();
    },[])


    return (
        <div className="catalog-container">
        <div className="catalog-filters">
            <button>All</button>
            <button>Fantasy</button>
            <button>Adventure</button>
            <button>Sci-Fi</button>
            <button>Romance</button>
        </div>
        <div className="catalog-items">
            {mangaBooks.map(manga => <CatalotItem key={manga._id} manga={manga}/>)}
        </div>
    </div>
    );
}

export default Catalog;
