import './homePage.css';

export default function HomePage(){

    return(
        <div className="homepage">
        <h1 className='homeHeader'>Second Hand Manga</h1>
        <div className="description">
            <p>Manga (漫画) are comics or graphic novels originating from Japan.Most manga conform to a style developed in Japan in the late 19th century, and the form has a long history in earlier Japanese art. The term manga is used in Japan to refer to both comics and cartooning. Outside of Japan, the word is typically used to refer to comics originally published in Japan.</p>
        </div>
        <div className="catalog-section">
            <h2>Latest additions to catalog!</h2>
            <p>Last 3 added, for now they will be static HTML, later on Ill get them from the server</p>
        </div>
        <div className="store-section">
            <h2>Latest additions to store!</h2>
            <p>Last 3 added to store, for now they will be static, later on Ill get them from the server</p>
            <p>Last 3 added to store, for now they will be static, later on Ill get them from the server</p>
            <p>Last 3 added to store, for now they will be static, later on Ill get them from the server</p>
            <p>Last 3 added to store, for now they will be static, later on Ill get them from the server</p>
            <p>Last 3 added to store, for now they will be static, later on Ill get them from the server</p>
        </div>
    </div>
    )
}