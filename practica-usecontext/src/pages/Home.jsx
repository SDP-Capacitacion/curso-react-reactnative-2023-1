import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListCharacter from "../components/ListCharacter";

const Home = () => {
  const [character, setCharacter] = useState([]);

  const urlInitial = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacter(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacter(urlInitial);
  }, []);

  return (
    <main>
      <Navbar />
      <ListCharacter character={character} />
    </main>
  );
};

export default Home;
