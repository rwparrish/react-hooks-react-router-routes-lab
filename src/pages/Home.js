import { movies } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

 const movies_to_display = movies.map(movie => <MovieCard key={movie.id} title={movie.title} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Home Page</h1>
      <main>
        {movies_to_display}
      </main>
    </>
  );
};

export default Home;
