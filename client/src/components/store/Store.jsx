import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect} from 'react';

import mangaAPI from '../../api/manga-api';

import StoreItem from './store-item/StoreItem';
import Spinner from '../spinner/Spinner';
import React from 'react';
import './store.css';

export default function Store() {
    const [mangaBooks, setMangaBooks] = useState([]);
    // const baseUrl = 'http://localhost:3030/data/productList';
    // const {data: mangaBooks} = useFetch(baseUrl, []);

    useEffect(()=>{
       (async()=>{
            const result = await mangaAPI.getAllManga();
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
            {mangaBooks.length > 0 ? (mangaBooks.map(manga => <StoreItem key={manga._id} manga={manga}/>)) : <Spinner/> }
        </div>
    </div>
    );
}

