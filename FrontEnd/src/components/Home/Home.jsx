import React from "react";

import pikapika from '../../img/waving-pikachu.gif'
function Home() {
  return (
    <>
      <h1>ESTE ES EL HOME POKEMON</h1>
      <img src={pikapika} alt="pikachuGif" className="w-75"/>
    </>
  );
}

export default Home;
