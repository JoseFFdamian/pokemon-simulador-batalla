import React,{useEffect, useRef, useLayoutEffect} from 'react'

const LogList = ({log, conVida, conVidaAlly}) => {
  let i = 0;

  // Crea una referencia al último elemento de la lista
  const lastLogItemRef = useRef(null);

  // Ejecuta una función cada vez que se agrega un nuevo elemento a la lista
  useEffect(() => {
    // Si existe la referencia al último elemento de la lista, hace scroll hasta él
    if (lastLogItemRef.current) {
      lastLogItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [log[log.length - 1]]); // Pasa el último elemento de la lista como dependencia

  return (
    <div className="contentLogContent">
      <div className='overflow-auto logList border'>
        <ul className='list-group border'>
        {log.map((item, index) => (
        // Asigna la referencia al último elemento de la lista al elemento actual
        <li ref={lastLogItemRef} className={`list-group-item ${conVida && index === log.length - 1 ? 'bg-primary bg-transition' : index !== log.length - 1 ? 'bg-dark bg-transition' : 'bg-success bg-transition'} text-light m-1`} key={i++}>
          {(conVida && conVidaAlly) || index !== log.length - 1 ? 
          `${item.name.charAt(0).toUpperCase() + item.name.slice(1)} atacó a ${item.target.charAt(0).toUpperCase() + item.target.slice(1)} con ${item.moves} inflingiendo ${item.damage} de daño` 
          : 
          conVidaAlly ? `${item.target.charAt(0).toUpperCase() + item.target.slice(1)} derroto a ${item.name.charAt(0).toUpperCase() + item.name.slice(1)}` 
          : 
          `${item.name.charAt(0).toUpperCase() + item.name.slice(1)} derroto a ${item.target.charAt(0).toUpperCase() + item.target.slice(1)}`}
        </li>
      ))}
        </ul>
      </div>
    </div>
  )
}
export default LogList


