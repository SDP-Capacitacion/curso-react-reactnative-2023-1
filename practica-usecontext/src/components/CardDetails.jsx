import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, setFetchData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());
      setFetchData(data);
    })();
  }, [api]);

  return (
    <div className="container-card">
      <div className="detail">
        <h1 className="center">{name}</h1>
        <img src={image} alt={name} />
        {(() => {
          if (status === "Dead") {
            return <div className="danger center">{status}</div>;
          } else if (status === "Alive") {
            return <div className="success center">{status}</div>;
          } else {
            return <div className="warning center">{status}</div>;
          }
        })()}
        <p>Gender: {gender}</p>
        <p>Location: {location?.name}</p>
        <p>Origin: {origin?.name}</p>
        <p>Species: {species}</p>
        <p>Type: {type}</p>
      </div>
    </div>
  );
};

export default CardDetails;
