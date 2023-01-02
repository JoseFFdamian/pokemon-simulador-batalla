import React from "react";
import ModalAlly from "./ModalAlly";

/* Componente que almacena los datos con las imagenes, barra de vida y otros datos del pokemon
aliado, este proporciona el className para diseñar los componentes mencionados anteriormente.
Y a su vez, muestra un modal al hacer click sobre el pokemon aliado. */

const AllyContainer = ({conVidaAlly, pokemon, HpAlly, hpBarAlly, barColorAlly }) => {
  const getBackgroundColor = (type) => {
    switch (type) {
      case "fire":
        return "#A04000";
      case "grass":
        return "#145A32";
      case "water":
        return "#1B4F72";
      case "electric":
        return "#F4D03F";
      case "psychic":
        return "#BF00C8";
      case "ice":
        return "#2B95CB";
      case "dragon":
        return "#5E0063";
      case "dark":
        return "#886547";
      case "rock":
        return "#A04000";
      case "fairy":
        return "#FCBDFF";
      case "normal":
        return "#616754";
      case "fighting":
        return "#A22624";
      case "fliying":
        return "#BC7CE8";
      case "poison":
        return "#754894";
      case "ground":
        return "#A3864A";
      case "bug":
        return "#79A34A";
      case "ghost":
        return "#746386";
      case "steel":
        return "#91839A";
      // Agrega más casos para los demás tipos de Pokémon
      default:
        return "rgb(63, 62, 61)";
    }
  };

  return (
    <div className="allyContainer">
        {pokemon.map(({ name, hp,img, attack, type, defense, speed, atkEsp, defEsp }) => (
          <div key={0}>
            <div className='contentHpBar' style={{ backgroundColor: getBackgroundColor(type) }}>
              <div className='border contentHpBarContent'>
              <div className="flexNombre">
                  <div className="nombreBar">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                  <div className="lvlBar"> Lv. 1 </div>
                  </div>
                <div className='d-flex lifeBarContainer ' >
                  <div key={1} className="progress lifeBar">
                    <div key={2} className={`progress-bar ${barColorAlly} `} role="progressbar" aria-label="Basic example" style={{width: `${hpBarAlly}%` }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='porcentageBar mx-3'> HP</div>
                </div>
                <div className="row g-0 text-center ">
                  <div className="col-sm-6 col-md-5 tipoPoke" style={{ backgroundColor: getBackgroundColor(type) }}>{type}</div>
                  <div className="col-6 col-md-7 mobile-hp-section ">
                  <div className={(HpAlly===0)?'my-1 text-start mx-1 text-danger nombreBarDerrotado' : 'text-center mx-4 hpCounter'} >{(HpAlly ===0)?`${name.charAt(0).toUpperCase() + name.slice(1)} derrotado` : HpAlly + "/" + hp}</div>
                  </div>
                </div>
              </div>
            </div>
            {conVidaAlly ? (
              <>
                <img
                  key={3}
                  className="ally"
                  src={`https://play.pokemonshowdown.com/sprites/ani-back-shiny/${name}.gif`} /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                  alt="pkmnAlly"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                />
              </>
            ) : (
              <>
                <img
                  key={4}
                  className="enemyDown"
                  src={
                    img
                  } /* Se puede utilizar el nombre extraido de pokeapi para cambiar la imagen del pokemon */
                  alt="pkmnAlly"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                />
              </>
            )}
            <ModalAlly name={name} hp={hp} img={img} attack={attack} type={type} defense={defense} speed={speed} atkEsp={atkEsp} defEsp={defEsp} />
          </div>
        ))}
    </div>
  )
}

export default AllyContainer;
