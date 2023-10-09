import React from "react";
import { Link } from "react-router-dom";

const ListCharacter = ({ page, character = [] }) => {
  return (
    <>
      <section className="container">
        <ul className="container-list">
          {character.map((item, index) => {
            return (
              <Link key={index} className="linkto" to={`${page}${item.id}`}>
                <ol className="item-character" key={index}>
                  {item.name}
                </ol>
              </Link>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ListCharacter;
