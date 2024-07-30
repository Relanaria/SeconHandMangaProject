import { useState, useEffect } from 'react';
import './homePage.css';
import LatestAdditions from './latest-additions/LatestAdditions';
const baseUrl = `http://localhost:3030/data/productList?sortBy=_createdOn%20desc`


export default function HomePage(){
    const [latestAddedMangas, setLatest] = useState([]);

    useEffect(() =>{

        (async () =>{
            console.log('tes');
            const response = await fetch(baseUrl);
            const result = await response.json();
            setLatest(result);
        })();
      
    },[])

    return(
        <div className="homepage">
        <div className="description">
        <h1>Second Hand Manga</h1>
            <p>Manga (漫画) are comics or graphic novels originating from Japan.Most manga conform to a style developed in Japan in the late 19th century, and the form has a long history in earlier Japanese art. The term manga is used in Japan to refer to both comics and cartooning. Outside of Japan, the word is typically used to refer to comics originally published in Japan.</p>
        </div>
        <div className="catalog-section">
            <h2>Latest additions to catalog!</h2>

            <div className="manga-panels">
            {latestAddedMangas.map(manga => <LatestAdditions key={manga._id} manga={manga}/>)}
            </div>

        </div>
        <div className="store-section">
            <h2>Latest additions to store!</h2>
            <div className="manga-panels">
            {latestAddedMangas.map(manga => <LatestAdditions key={manga._id} manga={manga}/>)}
            </div>
        </div>
    </div>
    )
}