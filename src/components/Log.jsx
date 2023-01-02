import React from 'react'
import LogList from './LogList'

/* Componente que genera el esqueleto de la seccion del registro de batalla. Tambien llamada a otro componente
que muestra los datos a detalle del combate. */

const Log = ({pokemon, log, enemyName, conVida, contadorLog, conVidaAlly}) => {
  return (
    <div className="logg border">
      <div className="row g-0 text-center border titleContainer">
        <div className="col-sm-6 col-md-7 title1">Battle Log</div>
        <div className="col-6 col-md-5 border title2 ">
          <p className='title22'>Historial de acciones realizadas</p>
        </div>
      </div>
      <LogList contadorLog={contadorLog} conVida={conVida} conVidaAlly={conVidaAlly} enemyName={enemyName} pokemon={pokemon} log={log} />
    </div>
  )
}

export default Log

//