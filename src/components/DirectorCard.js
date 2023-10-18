function DirectorCard({ director }) {

    const movies = director.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
        <article>
            <h2>{director.name}</h2>
            <ul>
                {movies}
            </ul>
        </article>
    );
};

export default DirectorCard;