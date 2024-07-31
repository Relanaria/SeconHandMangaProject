import { useFetch } from '../../hooks/useFetch';
import React from 'react';
import './catalog.css';
import CatalotItem from './catalog-item/CatalogItem';

function Catalog() {
    const baseUrl = 'http://localhost:3030/data/productList';
    const {data: mangaBooks} = useFetch(baseUrl, []);

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
