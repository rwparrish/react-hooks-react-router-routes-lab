import NavBar from "../components/NavBar";
import { movies } from "../data";
import { useParams } from "react-router-dom";

function Movie() {

  const { title } = useParams()

  const movie = movies.find(movie => movie.title === title)
  const genres = movie.genres.map(genre => <span>{genre}</span>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
