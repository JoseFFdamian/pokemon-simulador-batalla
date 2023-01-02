import { damageCalc } from "./damageFormula";
import Swal from 'sweetalert2'

export const enemyTurn = ({
    pokemon,
    pokemonEnemy,
    arrEnemyMoves
  }) => {

    

  const randomMove = Math.floor(Math.random() * 4);
  if(pokemonEnemy.hp <=5){
    Swal.fire('Any fool can use a computer')
  }

  var allyAttack = pokemonEnemy[0].attack;
  var movePower = arrEnemyMoves[randomMove].power; 
  var enemyDef = pokemon[0].defense;
  var allyType = pokemonEnemy[0].type;
  var enemyType = pokemon[0].type;
  var moveType = arrEnemyMoves[randomMove].moveType;
  var moveName = arrEnemyMoves[randomMove].nameEsp
  var pokeEnemyName = pokemon[0].name;
  var enemyDmgResult = damageCalc(
    allyAttack,
    movePower,
    enemyDef,
    allyType,
    enemyType,
    moveType,
    moveName
  );

  return[{
    damage: enemyDmgResult,
    move: moveName,
    enemy: pokeEnemyName
  }]
  
};
