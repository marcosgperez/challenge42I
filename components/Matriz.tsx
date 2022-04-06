import React from 'react';
import Tile, { TileProps } from './Tile';

type MatrizProps = {
  tiles: TileProps[],
}

const Matriz = ({tiles}: MatrizProps) => {
  return (
    <div className="Matriz">
      {tiles.map((tile, i) => (<Tile {...tile} />))}
    </div>
  )
}
export default Matriz;
