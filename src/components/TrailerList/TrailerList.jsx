import TrailerCard from '../TrailerCard/TrailerCard'
import styles from './TrailerList.module.css'

export default function TrailerList({trailers,busqueda}) {
  const trailersFiltrados = trailers.filter(trailer=>
    trailer.titulo.toLowerCase().includes(busqueda.toLowerCase())
  )
  return (
    <div className={styles['trailer-list']}>
      {trailersFiltrados.map((i) => 
        <TrailerCard trailer={i} key={i.id} />
      )}
    </div>
  )
}
