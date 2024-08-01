import { useEffect, useState } from 'react';

import { getAllManga } from '../../api/manga-api';

import LatestAdditionsStore from './latest-additions-store/LatestAdditionsStore';
import LatestAdditionsCatalog from './latest-additions-catalog/LatestAdditionsCatalog';
import Spinner from '../spinner/Spinner';
import './homePage.css';

export default function HomePage(){;
    const [productList, setProductList] = useState([]);
    const [catalogList, setCatalogList] = useState([]);


    const directory = {
        catalogList: 'catalogList?sortBy=_createdOn%20desc',
        productList: 'productList?sortBy=_createdOn%20desc'
    }

    useEffect(()=>{
        (async () =>{
            const productListManga = await getAllManga(directory.productList);
            const catalogListManga = await getAllManga(directory.catalogList);
            setCatalogList(catalogListManga);
            setProductList(productListManga);
        })();

    },[]);


    return(
        <div className="homepage">
        <div className="description">
        <h1>Second Hand Manga</h1>
            <p>Manga (漫画) are comics or graphic novels originating from Japan.Most manga conform to a style developed in Japan in the late 19th century, and the form has a long history in earlier Japanese art. The term manga is used in Japan to refer to both comics and cartooning. Outside of Japan, the word is typically used to refer to comics originally published in Japan.</p>
        </div>
        <div className="catalog-section">
            <h2>Latest additions to catalog!</h2>
            <div className="manga-panels">
                {catalogList.length > 0 ? catalogList.map(manga => <LatestAdditionsCatalog key={manga._id} manga={manga}/>) : <Spinner />}
            </div>
        </div>
        <div className="store-section">
            <h2>Latest additions to store!</h2>
            <div className="manga-panels">
                {productList.length > 0 ? productList.map(manga => <LatestAdditionsStore key={manga._id} manga={manga}/>) : <Spinner />}
            </div>
        </div>
    </div>
    )
}