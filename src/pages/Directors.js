import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";
import { directors } from "../data";


function Directors() {

  const directors_to_display = directors.map(director => <DirectorCard key={director.id} director={director} />)  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors_to_display}
      </main>
    </>
  );
};

export default Directors;
