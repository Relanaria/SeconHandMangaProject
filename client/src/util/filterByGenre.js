

export default function filterByGenre(mangaBooks, genre) {
    if(genre !== 'All'){
        const filterBooks = mangaBooks.filter((mangaBook) => mangaBook.genre == genre);
        return filterBooks
    }

    return mangaBooks;
}