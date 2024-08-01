import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect} from 'react';

import mangaAPI from '../../api/manga-api';

import CatalotItem from './catalog-item/CatalogItem';
import Spinner from '../spinner/Spinner';
import React from 'react';
import './catalog.css';

function Catalog() {
    const [mangaBooks, setMangaBooks] = useState([]);
    // const baseUrl = 'http://localhost:3030/data/productList';
    // const {data: mangaBooks} = useFetch(baseUrl, []);
     const directory = 'catalogList'

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga(directory);
            setMangaBooks(result);
        })();
    }, [])

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
