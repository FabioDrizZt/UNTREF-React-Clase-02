import { useState } from 'react'
import styles from './TrailerCard.module.css'

export default function TrailerCard({trailer}) {
  const [details, setDetails] = useState(false)
  
  return (
    <div className={styles['trailer-card']}>
      <img className={styles.poster} src={trailer.poster} alt={trailer.titulo} />
      <h2>{trailer.titulo}</h2>
      <p><strong>Categoría:</strong> {trailer.categoria}</p>
      <p><strong>Género:</strong> {trailer.genero}</p>
      {details &&
      <>
        <p><strong>Resumen:</strong> {trailer.resumen}</p>
        <p><strong>Reparto:</strong> {trailer.reparto}</p>
        <a href={trailer.trailer} target='_blank' rel='noopener noreferrer'>
          Ver Trailer
        </a>
      </>
      }
      <button onClick={()=>setDetails(!details) }> {details ? 'Ocultar': 'Ver'} Detalles </button>
      
    </div>
  )
}
