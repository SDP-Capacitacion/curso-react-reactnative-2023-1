import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListCharacter from "../components/ListCharacter";
import Pagination from "../components/Pagination";

const Home = () => {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const urlInitial = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    fetchCharacter(info.prev);
  };

  const onNext = () => {
    fetchCharacter(info.next);
  };

  useEffect(() => {
    fetchCharacter(urlInitial);
  }, []);

  return (
    <main>
      <Navbar />
      <ListCharacter character={character} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
    </main>
  );
};

export default Home;
