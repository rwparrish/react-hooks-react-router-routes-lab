function ActorCard({ actor }) {

    const movies = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    
    return (
        <article>
            <h2>{actor.name}</h2>
            <ul>
                {movies}
            </ul>
        </article>
    );
};

export default ActorCard;