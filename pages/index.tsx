import React from "react";
import Matriz from "../components/Matriz";

const Home = (props) => {

  const Tiles = Array(8*8).fill(0).map((_, i) => ({
    checked: false
  }));

  /* Ejemplo de linea*/
  Tiles.map((tile, i) => { if ([12,20,28,36].indexOf(i) >= 0) { tile.checked = true } });
  
  return (
    <div className="Home">
      <Matriz tiles={Tiles} />
    </div>
  );
};

export default Home;
