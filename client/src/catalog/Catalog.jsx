import './catalog.css'

export default function Catalog() {
    return (
        <div className="catalog-page">
            <div className="filter-buttons">
                <button>All</button>
                <button>Fantasy</button>
                <button>Adventure</button>
                <button>Sci-Fi</button>
                <button>Romance</button>
            </div>
            <div className="manga-container">
                <MangaPanel 
                    image='https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY281_CR1,0,190,281_.jpg'
                    name="Naruto"
                    author="Author Name 1"
                />
                <MangaPanel 
                    image='https://m.media-amazon.com/images/M/MV5BNzIxODYzMjYtYTU3My00MzU1LWIyYmItZjRjM2NhYTU4NjQxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
                    name="DoroHedoro"
                    author="Author Name 2"
                />
                <MangaPanel 
                    image='https://m.media-amazon.com/images/I/81jzTuXiB9L._AC_UF1000,1000_QL80_.jpg'
                    name="The Begging afte the End"
                    author="Author Name 3"
                />
            </div>
        </div>
    );
}

//TODO move this to another directory under current one!!!
function MangaPanel({ image, name, author }) {
    return (
        <div className="manga-panel">
            <img src={image} alt={name} />
            <div className="manga-details">
                <h3>{name}</h3>
                <p>{author}</p>
                <button className="details-button">Details</button>
            </div>
        </div>
    );
}