import React from "react";

const ListCharacter = ({ character = [] }) => {
  return (
    <>
      <section className="container">
        <ul className="container-list">
          {character.map((item, index) => {
            return (
              <ol className="item-character" key={index}>
                {item.name}
              </ol>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ListCharacter;
