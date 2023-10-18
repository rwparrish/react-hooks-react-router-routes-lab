import { actors } from "../data";
import ActorCard from "../components/ActorCard";
import NavBar from "../components/NavBar";
import { act } from "react-dom/test-utils";

function Actors() {

  const actor_to_display = actors.map(actor => <ActorCard key={actor.name} actor={actor} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actor_to_display}
      </main>
    </>
  );
};

export default Actors;
