import React from "react";

const Pagination = ({ prev, next, onPrev, onNext }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="pagination">
      {prev ? <button onClick={handlePrev}>Anterior</button> : null}
      {next ? <button onClick={handleNext}>Siguiente</button> : null}
    </nav>
  );
};

export default Pagination;
