import React from "react";

const NestedGrid = () => {
  return (
    <section className="nested-grid">
      <div class="grid-item grid1">uno</div>
      <div class="grid-item grid2">dos</div>
      <div class="grid-item grid3">tres</div>
      <div class="grid-item grid4">
        <div class="nested">
          <div class="nested-item nested1">head</div>
          <div class="nested-item nested2">dos</div>
          <div class="nested-item nested3">tres</div>
          <div class="nested-item nested4">cuatro</div>
          <div class="nested-item nested5">cinco</div>
        </div>
      </div>
      <div class="grid-item grid5">cinco</div>
    </section>
  );
};

export default NestedGrid;
