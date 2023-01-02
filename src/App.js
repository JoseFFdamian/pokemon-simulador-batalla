import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import { getPokeApi } from "./Helpers/getPokemonApi";
import Playground from "./components/Playground";
import Log from "./components/Log";

/* El componente padre, practicamente llama a los componentes principales (playground y log) para iniciar
toda la sopa.
TODO: Convertir todos los useEffects en un solo arreglo, de preferencia global para poder acceder a los datos
mas sencillamente. Esta conversion requiere ajustar los parametros del return y cambiar el map por el arreglo
que generes. */
const arrayLog = [];

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonEnemy, setPokemonEnemy] = useState([]);
  const [hpBarEnemy, setHpBarEnemy] = useState(0);
  const [HpEnemy, setHpEnemy] = useState(0);
  const [hpMaxEnemy, setHpMaxEnemy] = useState(0);
  const [hpBarAlly, setHpBarAlly] = useState(0);
  const [HpAlly, setHpAlly] = useState(0);
  const [hpMaxAlly, setHpMaxAlly] = useState(0);
  const [barColor, setBarColor] = useState("bg-success");
  const [barColorAlly, setBarColorAlly] = useState("bg-success");
  const [conVida, setConVida] = useState(true);
  const [conVidaAlly, setConVidaAlly] = useState(false);
  const [log, setLog] = useState([]);
  const [enemyName, setEnemyName] = useState("");
  const audioRef = useRef(null);
  const [audio, setAudio] = useState("");
  const [volume, setVolume] = useState(0);


  function pauseAudio() {
    audioRef.current.pause();
  }

  function playAudio() {
    audioRef.current.play();
  }
  function handleVolumeChange(event) {
  const newVolume = event.target.value;
  setVolume(newVolume);
  audioRef.current.volume = newVolume / 120;
}

  function audioPicker() {
    let randomAudio = Math.floor(Math.random() * 4);
    setAudio(`audio/audio-${randomAudio}.mp3`);
  }

  const getPokemon = async (numPokemonAlly, numPokemonEnemy) => {
    const dataAlly = await getPokeApi(numPokemonAlly);
    const dataEnemy = await getPokeApi(numPokemonEnemy);
    //console.log(dataAlly);
    //console.log(dataEnemy);
    setPokemon([dataAlly]);
    setPokemonEnemy([dataEnemy]);

    setHpEnemy(dataEnemy.hp);
    setHpMaxEnemy(dataEnemy.hp);
    setEnemyName(dataEnemy.name);

    setHpAlly(dataAlly.hp);
    setHpMaxAlly(dataAlly.hp);
  };

  let arrIdPokemon = [];
  for (let i = 1; i <= 151; i++) {
    arrIdPokemon.push(i);
  }
  const valorRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  let randomValue1 = valorRandom(arrIdPokemon);
  let randomValue2 = valorRandom(arrIdPokemon);

  useEffect(() => {
    audioPicker();
  }, []);

  useEffect(() => {
    getPokemon(randomValue1, randomValue2);
  }, []);

  useEffect(() => {
    if (hpBarEnemy <= 50 && hpBarEnemy >= 10) {
      setBarColor("bg-warning");
    } else {
      if (hpBarEnemy < 10) {
        setBarColor("bg-danger");
      } else {
        setBarColor("bg-success");
      }
    }
    if (hpBarAlly <= 50 && hpBarAlly >= 10) {
      setBarColorAlly("bg-warning");
    } else {
      if (hpBarAlly < 10) {
        setBarColorAlly("bg-danger");
      } else {
        setBarColorAlly("bg-success");
      }
    }

    if (HpEnemy <=0) {
      setHpBarEnemy(0);
      setHpEnemy(0);
      setConVida(false);

    } else {
      setConVida(true);
      setHpBarEnemy((HpEnemy / hpMaxEnemy) * 100);
    }
    if (HpAlly <= 0) {
      setHpBarAlly(0);
      setHpAlly(0);
      setConVidaAlly(false);
    } else {
      setConVidaAlly(true);
      setHpBarAlly((HpAlly / hpMaxAlly) * 100);
    }
  }, [HpEnemy, hpMaxEnemy, barColor, hpBarEnemy,HpAlly,hpBarAlly,hpMaxAlly]);

  const processHealth = (damage) => {
      setHpEnemy(HpEnemy - damage);
  };
  const processHealthAlly = (damage) => {
    setHpAlly(HpAlly - damage);
  };


  const handleClickLog = (name, moves, damage, target) => {
    // Agregue una nueva entrada al log
    arrayLog.push({ name, moves, damage, target })
    setLog([...log, arrayLog]);
    return arrayLog;
  };

  if (audio.length !== 0) {
    return (
      <div>
        <audio ref={audioRef} loop autoPlay>
          <source id="audio-file" src={audio} type="audio/mpeg" />
        </audio>

        <div className="bgrd banner">
          <figure className="logo">
            <img src="images/pokemon.png" height="60" alt="logo" />
          </figure>
          <h1 className="text-white title-header">Simulador de batalla Pokemon</h1>
        </div>
        <div>
          <div className="bgrd text-light main">
            <Playground
              enemyName={enemyName}
              handleClickLog={handleClickLog}
              conVida={conVida}
              processHealth={processHealth}
              processHealthAlly={processHealthAlly}
              pokemon={pokemon}
              HpEnemy={HpEnemy}
              HpAlly={HpAlly}
              hpBarAlly={hpBarAlly}
              hpBarEnemy={hpBarEnemy}
              pokemonEnemy={pokemonEnemy}
              barColor={barColor}
              barColorAlly={barColorAlly}
              conVidaAlly={conVidaAlly}
              log={log}
            />

            <Log
              conVida={conVida}
              enemyName={enemyName}
              pokemon={pokemon}
              log={arrayLog}
              conVidaAlly={conVidaAlly}
            />
          </div>
        </div>

        <div className="footer">
          <div className="footer-left">
            <div
              className="btn-group text-white"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <span className="text-music">Music: </span>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                onClick={playAudio}
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                On
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                onClick={pauseAudio}
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                Off
              </label>
            </div>
            <div className="volumeContainer">
              <label className="form-label musicVolume text-light">Volumen: {volume}%</label>
              <input type="range" className="form-range" min="0" max="100" step="1" value={volume} onChange={handleVolumeChange} ></input>
            </div>
          </div>
          <div className="footer-right">
            <a href="https://github.com/Hakidoto/pokemeem.git">
              <img
                src="images/github.png"
                className="icon-style"
                alt="Icono Github"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
