import React from "react";
export type TileProps = {
  checked: boolean;
  id: number;
};
const Tile = ({ id, checked }: TileProps) => {
  const handleClick = (e) => {
    e.preventDefault();

    // Obtengo un array con todas las casillas
    let allTiles = Array.from(document.getElementsByClassName("Tile"));
    // Obtengo la cantidad de casillas con check
    let checkeds = allTiles.filter((e) => e.className.includes("checked"));
    const clicked = e.target.className;
    let divClicked = Array.from(document.getElementsByClassName(clicked));
    // Caso error
    let value = divClicked[0].className;
    // Caso de clickear alguna casilla no correspondiente
    if ( clicked.includes("checked") || clicked.includes("disabled") || checkeds.length === 4) {
      divClicked[0].className = `${clicked} wrong`;
      return setTimeout(() => {
        return (divClicked[0].className = value);
      }, 100);
    };
    
    let num = Number(divClicked[0].className.slice(5, 7));

    // Modulo de cada columna para calcular particularidades
    let modulo = num % 8
    let moduloDos = (num + -1) % 8
    let moduloTres = (num + - 2) % 8
    let moduloDer = (num + 1) % 8
    let moduloCinco = (num + 3) % 8
    let moduloSeis = (num + 2) % 8

    // Caso principio de loop
    if (checkeds.length % 4 === 0) {
      allTiles.map((e) =>
        // Caso cuadrado click
        Number(e.className.slice(5, 7)) !== num &&
        // Caso derecha
        Number(e.className.slice(5, 7)) !== num + 1 &&
        // Caso izquierda
        Number(e.className.slice(5, 7)) !== num - 1 &&
        // Caso hacia arriba
        Number(e.className.slice(5, 7)) !== num + 8 &&
        // Caso hacia abajo
        Number(e.className.slice(5, 7)) !== num - 8 &&
        // Caso ya esta checkeada
        !e.className.includes("checked")
          ? (e.className = `${e.className} disabled`) :
          // Columna 1
          modulo === 0 && num % 2 === 0 ?
          modulo === ((Number(e.className.slice(5, 7)) + 1) % 8) ? (e.className = `${e.className} disabled`) : e.className
          :
          // Columna 2
          moduloDos === 0 && num % 2 !== 0 ?
          modulo === ((Number(e.className.slice(5, 7)) + 1) % 8) ? (e.className = `${e.className} disabled`) : e.className
          :
          // Columna 3
          moduloTres === 0 && num % 2 === 0 ?
          modulo === ((Number(e.className.slice(5, 7)) + 1) % 8) ? (e.className = `${e.className} disabled`) : e.className
          :
          // Columna 6
          moduloSeis === 0 && num % 2 === 0 ?
          modulo === ((Number(e.className.slice(5, 7)) - 1 ) % 8) ? (e.className = `${e.className} disabled`) : e.className
          :
          // Columna 5
          moduloCinco === 0 && num % 2 !== 0 ?
          modulo === ((Number(e.className.slice(5, 7)) - 1 ) % 8) ? (e.className = `${e.className} disabled`) : e.className
          :
          // Columna 8
          moduloDer === 0 && num % 2 !== 0 ?
          modulo === ((Number(e.className.slice(5, 7)) - 1) % 8) ? (e.className = `${e.className} disabled`) : e.className
          :
          e.className
      );
      return (divClicked[0].className = `${clicked} checked active`);
    }

    // Caso segundo click
    if (checkeds.length % 4 === 1) {
      let puntoCero = Number(
        allTiles
          .filter((e) => e.className.includes("active"))[0]
          .className.slice(5, 7)
      );
      let direccion = Number(divClicked[0].className.slice(5, 7));
      // Caso arriba
      if (direccion === puntoCero - 8) {
        allTiles.map((e) =>
          Number(e.className.slice(5, 7)) !== puntoCero &&
          !e.className.includes("checked")
            ? Number(e.className.slice(5, 7)) === puntoCero - 16
              ? (e.className = e.className.slice(0, 7))
              : (e.className = `${e.className} disabled`)
            : e.className
        );
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
      // Caso abajo
      if (direccion === puntoCero + 8) {
        allTiles.map((e) =>
          Number(e.className.slice(5, 7)) !== puntoCero &&
          !e.className.includes("checked")
            ? Number(e.className.slice(5, 7)) === puntoCero + 16
              ? (e.className = e.className.slice(0, 7))
              : (e.className = `${e.className} disabled`)
            : e.className
        );
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
      // Caso derecha
      if (direccion === puntoCero + 1) {
        allTiles.map((e) =>
          Number(e.className.slice(5, 7)) !== puntoCero &&
          !e.className.includes("checked")
            ? Number(e.className.slice(5, 7)) === puntoCero + 2
              ? (e.className = e.className.slice(0, 7))
              : (e.className = `${e.className} disabled`)
            : e.className
        );
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
      // Caso izquierda
      if (direccion === puntoCero - 1) {
        allTiles.map((e) =>
          Number(e.className.slice(5, 7)) !== puntoCero &&
          !e.className.includes("checked")
            ? Number(e.className.slice(5, 7)) === puntoCero - 2
              ? (e.className = e.className.slice(0, 7))
              : (e.className = `${e.className} disabled`)
            : e.className
        );
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
    }

    // Caso tercer click
    if (checkeds.length % 4 === 2) {
      let puntoCero = Number(
        allTiles
          .filter((e) => e.className.includes("active"))[0]
          .className.slice(5, 7)
      );
      let direccion = Number(divClicked[0].className.slice(5, 7));
      if (direccion === puntoCero - 8) {
        allTiles[puntoCero - 16].className = allTiles[
          puntoCero - 16
        ].className.slice(0, 7);
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
      if (direccion === puntoCero + 8) {
        allTiles[puntoCero + 16].className = allTiles[
          puntoCero + 16
        ].className.slice(0, 7);
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
      if (direccion === puntoCero + 1) {
        allTiles[puntoCero + 2].className = allTiles[
          puntoCero + 2
        ].className.slice(0, 7);
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
      if (direccion === puntoCero - 1) {
        allTiles[puntoCero - 2].className = allTiles[
          puntoCero - 2
        ].className.slice(0, 7);
        allTiles.filter((e) => e.className.includes("active"))[0].className =
          allTiles
            .filter((e) => e.className.includes("active"))[0]
            .className.replace("active", "");
        divClicked[0].className = `${clicked} checked active`;
      }
    }

    // Caso ultimo click
    if (checkeds.length % 4 === 3) {
      allTiles.filter((e) => e.className.includes("active"))[0].className =
        allTiles
          .filter((e) => e.className.includes("active"))[0]
          .className.replace("active", "");
      divClicked[0].className = `${clicked} checked active`;
      allTiles.map((e) =>
        e.className.includes("disabled")
          ? (e.className = e.className.slice(0, 7))
          : e.className
      );
    }
  };
  return (
    <div
      className={`Tile ${checked ? "checked" : ""}${id}`}
      onClick={(e) => handleClick(e)}
    ></div>
  );
};
export default Tile;
