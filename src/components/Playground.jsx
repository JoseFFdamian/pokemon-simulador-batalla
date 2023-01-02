import React from 'react'
import AllyContainer from './AllyContainer'
import EnemyContainer from './EnemyContainer'
import Footer from './Footer'

/* Componente que almacena los contenedores con las imagenes, vida y otros datos del pokemon
aliado y rival, a su vez es utilizado para recibir los props/datos (pokemonEnemy, pokemon, hpEnemy, etc)
desde el componente padre (App.js me parece) */

const Playground = ({conVidaAlly,turno,pokemonEnemy, pokemon, HpEnemy, hpBarEnemy, processHealth, barColor, conVida, handleClickLog, enemyName,hpBarAlly, HpAlly,barColorAlly, processHealthAlly}) => {
  return (
    <div className="playground">
      <div className="separador"/>
      <div className="charas">
        <EnemyContainer  enemyName={enemyName} conVida={conVida} pokemonEnemy={pokemonEnemy} HpEnemy={HpEnemy} hpBarEnemy={hpBarEnemy} barColor={barColor}/>
        <AllyContainer conVidaAlly={conVidaAlly} pokemon={pokemon} hpBarAlly={hpBarAlly} HpAlly={HpAlly} barColorAlly={barColorAlly} />
      </div>

      <Footer conVidaAlly={conVidaAlly} turno={turno} conVida={conVida} enemyName={enemyName} handleClickLog={handleClickLog} pokemon={pokemon} processHealth={processHealth} processHealthAlly={processHealthAlly} pokemonEnemy={pokemonEnemy}/>
    </div>
  )
}

export default Playground