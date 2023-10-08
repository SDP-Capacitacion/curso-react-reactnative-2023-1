import React from "react";

const ListCharacter = ({ character = [] }) => {
  return (
    <>
      {character.map((item, index) => {
        console.log(item.name, "character");
        <p key={index}>{item.name}</p>;
      })}
    </>
  );
};

export default ListCharacter;
