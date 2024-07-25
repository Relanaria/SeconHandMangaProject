import React from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';

function Catalog() {
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
            {mangaList.map((manga, index) => (
                <div className="catalog-item" key={index}>
                    <img src={manga.imageUrl} alt={manga.title} class="img-fluid"/>
                    <h3>{manga.title}</h3>
                    <p>{manga.author}</p>
                    <Link to={manga.detailsUrl} className="details-link">Details</Link>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Catalog;
