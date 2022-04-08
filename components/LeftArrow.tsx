import React from "react";
import Tile, { TileProps } from "./Tile";
import { FiCornerLeftDown } from "react-icons/fi";

type MatrizProps = {
  tiles: TileProps[]
};

const LeftArrow = ({ tiles }: MatrizProps) => {

  const handleRotate = (e) => {
    e.preventDefault();
    let tiles = Array.from(document.getElementsByClassName("Tile"));
    let checkeds = tiles.filter((e) => e.className.includes("checked"));
    if (checkeds.length < 4) {
      return alert("Please finish or remove the line");
    }
    let pivote = checkeds.filter((e) => e.className.includes("active"));
    let pivoteNumber = Number(pivote[0].className.slice(5, 7));
    let final = checkeds.filter((e) => !e.className.includes("active"));
    let finalNumber = Number(final[0].className.slice(5, 7));
    let direccion = pivoteNumber - finalNumber;
    // Direccion 1
    if (direccion === 3 || direccion === -3) {
      tiles[pivoteNumber + 8] !== undefined &&
      tiles[pivoteNumber + 16] !== undefined &&
      tiles[pivoteNumber + 24] !== undefined &&
      // Caso algun frame se salga del cuadrado
      (pivoteNumber % 8 !== 0) === ((pivoteNumber + 8) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber + 16) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber + 24) % 8 !== 0)
        ? (tiles.map((e) =>
            e !== pivote[0]
              ? (e.className = `${e.className.slice(0, 7)}`)
              : e.className
          ),
          (tiles[pivoteNumber + 8].className = `${
            tiles[pivoteNumber + 8].className
          } checked`),
          (tiles[pivoteNumber + 16].className = `${
            tiles[pivoteNumber + 16].className
          } checked`),
          (tiles[pivoteNumber + 24].className = `${
            tiles[pivoteNumber + 24].className
          } checked`))
        : alert("Cannot swap");
    }
    // Direccion 2
    if (direccion === 24) {
      tiles[pivoteNumber - 1] !== undefined &&
      tiles[pivoteNumber - 2] !== undefined &&
      tiles[pivoteNumber - 3] !== undefined &&
      // Caso algun frame se salga del cuadrado
      (pivoteNumber % 8 !== 0) === ((pivoteNumber - 1) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber - 2) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber - 3) % 8 !== 0)
        ? (tiles.map((e) =>
            e !== pivote[0]
              ? (e.className = `${e.className.slice(0, 7)}`)
              : e.className
          ),
          (tiles[pivoteNumber - 1].className = `${
            tiles[pivoteNumber - 1].className
          } checked`),
          (tiles[pivoteNumber - 2].className = `${
            tiles[pivoteNumber - 2].className
          } checked`),
          (tiles[pivoteNumber - 3].className = `${
            tiles[pivoteNumber - 3].className
          } checked`))
        : alert("Cannot swap");
    }
    // Direccion 3
    if (direccion === -1) {
      tiles[pivoteNumber - 8] !== undefined &&
      tiles[pivoteNumber - 16] !== undefined &&
      tiles[pivoteNumber - 24] !== undefined &&
      // Caso algun frame se salga del cuadrado
      (pivoteNumber % 8 !== 0) === ((pivoteNumber - 8) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber - 16) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber - 24) % 8 !== 0)
        ? (tiles.map((e) =>
            e !== pivote[0]
              ? (e.className = `${e.className.slice(0, 7)}`)
              : e.className
          ),
          (tiles[pivoteNumber - 8].className = `${
            tiles[pivoteNumber - 8].className
          } checked`),
          (tiles[pivoteNumber - 16].className = `${
            tiles[pivoteNumber - 16].className
          } checked`),
          (tiles[pivoteNumber - 24].className = `${
            tiles[pivoteNumber - 24].className
          } checked`))
        : alert("Cannot swap");
    }
    // Direccion 3
    if (direccion === -8) {
      tiles[pivoteNumber + 1] !== undefined &&
      tiles[pivoteNumber + 2] !== undefined &&
      tiles[pivoteNumber + 3] !== undefined &&
      // Caso algun frame se salga del cuadrado
      (pivoteNumber % 8 !== 0) === ((pivoteNumber + 1) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber + 2) % 8 !== 0) &&
      (pivoteNumber % 8 !== 0) === ((pivoteNumber + 3) % 8 !== 0)
        ? (tiles.map((e) =>
            e !== pivote[0]
              ? (e.className = `${e.className.slice(0, 7)}`)
              : e.className
          ),
          (tiles[pivoteNumber + 1].className = `${
            tiles[pivoteNumber + 1].className
          } checked`),
          (tiles[pivoteNumber + 2].className = `${
            tiles[pivoteNumber + 2].className
          } checked`),
          (tiles[pivoteNumber + 3].className = `${
            tiles[pivoteNumber + 3].className
          } checked`))
        : alert("Cannot swap");
    }
  };
  return (
    <button onClick={(e) => handleRotate(e)} className="containIcon">
      <FiCornerLeftDown className="btnIcon" />
    </button>
  );
};
export default LeftArrow;
