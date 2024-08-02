import StoreItem from './store-item/StoreItem';
import Spinner from '../spinner/Spinner';
import React from 'react';
import './store.css';

import { useGetAllMangaStore } from '../../hooks/useMangaStore';

export default function Store() {
    const [mangaBooks, setMangaBooks] = useGetAllMangaStore();
    

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

