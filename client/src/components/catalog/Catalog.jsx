import CatalotItem from './catalog-item/CatalogItem';
import Spinner from '../spinner/Spinner';
import React from 'react';
import './catalog.css';

import { useGetAllMangaCatalog } from '../../hooks/useMangaCatalog';

function Catalog() {
    const [mangaBooks, setMangaBooks] = useGetAllMangaCatalog();

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
            {mangaBooks.length > 0 ? (mangaBooks.map(manga => <CatalotItem key={manga._id} manga={manga}/>)) : <Spinner/> }
        </div>
    </div>
    );
}

export default Catalog;
