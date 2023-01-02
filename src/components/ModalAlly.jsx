import React from 'react'

/* Componente que muestra un modal con los datos del pokemon aliado o enemigo, todos tomados del PokeAPI.
TODO: remover uno de los 2 Modales y simplemente pasar el nombre del pokemon, usando el helper getPokemonApi
con la funcion getPokeApi */

const ModalAlly = ({name, hp, img,attack, type, defense, speed, atkEsp, defEsp}) => {
  return (
    <div className="modal fade text-dark" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Estadisticas de ${name.charAt(0).toUpperCase() + name.slice(1)}`}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex">
            <div className='container border text-lg-start'>
              <p className='fs-5'>HP: <span className='h5 text-success'>{hp}</span></p>
              <p className='fs-5'>Ataque: <span className='h5 text-success'>{attack}</span></p>
              <p className='fs-5'>Ataque Especial: <span className='h5 text-success'>{atkEsp}</span></p>
              <p className='fs-5'>Defensa Especial: <span className='h5 text-success'>{defEsp}</span></p>
              <p className='fs-5'>Defensa: <span className='h5 text-success'>{defense}</span></p>
              <p className='fs-5'>Tipo: <span className='h5 text-success'>{type}</span></p>
              <p className='fs-5'>Velocidad: <span className='h5 text-success'>{speed}</span></p>
            </div>
            <div className='container border text-lg-start imgPokeModal'>
              <img
                className="m-5 imgModal"
                src={img} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                alt="pkmnEnemy"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                />
              </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAlly