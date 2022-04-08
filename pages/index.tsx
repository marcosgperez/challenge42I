import React from "react";
import Matriz from "../components/Matriz";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Trash from "../components/Trash";


const Home = (props) => {
  const Tiles = Array(8 * 8)
    .fill(0)
    .map((_, i) => ({
      checked: false,
      id: i,
    }));

  return (
    <div className="Home">
      <Matriz tiles={Tiles} />
      <div className="containerBtns">
        <LeftArrow tiles={Tiles} />
        <Trash tiles={Tiles} />
        <RightArrow tiles={Tiles} />
      </div>
    </div>
  );
};

export default Home;
