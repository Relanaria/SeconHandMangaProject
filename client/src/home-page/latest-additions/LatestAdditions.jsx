import { Link } from 'react-router-dom';
export default function LatestAdditions({manga}) {
 
    return(
    <div className="manga-panel">
      <img src={manga.imgUrl} alt={manga.title} className="manga-image" />
      <div className="manga-info">
        <h3 className="manga-title">{manga.title}</h3>
        <p className="manga-author">{manga.author}</p>
        <Link to={`/details/${manga._id}`} className="details-button">Details</Link>
      </div>
    </div>
    )
}