import React from "react";
import Tile, { TileProps } from "./Tile";
import { BsFillTrashFill } from "react-icons/bs";

type MatrizProps = {
  tiles: TileProps[];
};

const Trash = ({ tiles }: MatrizProps) => {
  const handleClick = (e) => {
    e.preventDefault();
    let tiles = Array.from(document.getElementsByClassName("Tile"));
    tiles.map((e) => (e.className = e.className.slice(0, 7)));
  };
  return (
    <button onClick={(e) => handleClick(e)} className="containIcon">
      <BsFillTrashFill className="btnIcon" />
    </button>
  );
};
export default Trash;
