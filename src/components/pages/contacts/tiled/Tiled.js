import React from "react";
import TiledItem from "./TiledItem/TiledItem";

const Tiled = props => {
  return (
    <div className="row">
      {props.data.map(item => <TiledItem item={item} key={item.phone}/>) }
    </div>
  )
}

export default Tiled;