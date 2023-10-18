import {Link} from 'react-router-dom';


function MovieCard({title}) {


  return (
    <article>
      <h1>{title}</h1>
      <Link to={`/movie/${title}`}>More Info</Link>
    </article>
  );
};

export default MovieCard;