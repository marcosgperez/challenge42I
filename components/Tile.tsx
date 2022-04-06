import React from 'react';
export type TileProps = {
  checked: boolean,
}
const Tile = ({ checked }: TileProps) => {
  return (
    <div className={`Tile ${checked ? 'checked' : ''}`}>
    </div>
  )
}
export default Tile;
