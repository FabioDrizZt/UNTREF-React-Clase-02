import styles from './TrailerCard.module.css'

export default function TrailerCard({trailer}) {
  return (
    <div className={styles['trailer-card']}>
      <img className={styles.poster} src={trailer.poster} alt={trailer.titulo} />
      <h2>{trailer.titulo}</h2>
      <p><strong>Categoría:</strong> {trailer.categoria}</p>
      <p><strong>Género:</strong> {trailer.genero}</p>
      <p><strong>Resumen:</strong> {trailer.resumen}</p>
      <p><strong>Reparto:</strong> {trailer.reparto}</p>
      <a href={trailer.trailer} target='_blank' rel='noopener noreferrer'>
        Ver Trailer
      </a>
    </div>
  )
}
