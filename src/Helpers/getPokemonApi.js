const pokeApi = `https://pokeapi.co/api/v2/pokemon/`;
const moveApi = `https://pokeapi.co/api/v2/move/`;

/* helper encargado de la llamada y procesamiento del API, se divide en dos funciones:
 - getPokeApi obtiene los datos relacionados al pokemon (nombre, imagen, movimientos y estadisticas)
 - getMoveApi obtiene los datos relacionados al movimiento (no. de usos, potencia, tipo de movimiento, etc) */


export const getPokeApi = async (numPokemon) => {
  const respuesta = await fetch(pokeApi + numPokemon);
  const results = await respuesta.json();
  const name = await results.name;
  const img = await results.sprites.other.dream_world.front_default;
  // Aunque esta funcion claramente funciona, 
  // incrementa la tarea ya que se tienen que cubrir 
  // mas situaciones especificas de cada movimiento, ya que no todos hacen solo daño.
  /* var num1 = Math.floor(Math.random() * 30) + 1;
  var num2 = num1 + 4;
  const moves = await results.moves.map(move => move.move.name).slice(num1, num2); */
  const moves = await results.moves.map(move => move.move.name).slice(0, 4);
  const attack = await  results.stats[1].base_stat;
  const defense = await  results.stats[2].base_stat;
  const hp = await  results.stats[0].base_stat;
  const type = await results.types[0].type.name;
  const speed = await  results.stats[5].base_stat;
  const atkEsp = await  results.stats[3].base_stat;
  const defEsp = await  results.stats[4].base_stat;
  const id = await results.id;
  //console.log(moves)
  //console.log(img);
  return { name, img, moves, hp, id, attack, type, defense, speed, atkEsp,defEsp};
};

export const getPokeMoveApi = async (moveName) => {
  const respuesta = await fetch(moveApi + moveName);
  const results = await respuesta.json();
  const accuracy = await results.accuracy;
  const power = await results.power;
  const pp = await results.pp;
  const moveType = await results.type.name;
  const description = await results.flavor_text_entries[62].flavor_text;
  const nameEsp = await results.names[5].name;
  //console.log(img);
  return { accuracy, power, pp, moveType, description, nameEsp};
};