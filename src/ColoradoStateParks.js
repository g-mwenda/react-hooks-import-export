import React from "react";
import howManyParks from "./parks/howManyParks";
import {trees,wildlife,elevation} from "./parks/RockyMountain"

console.log(trees)

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
