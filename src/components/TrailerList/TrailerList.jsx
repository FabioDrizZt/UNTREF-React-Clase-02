import TrailerCard from '../TrailerCard/TrailerCard'
import styles from './TrailerList.module.css'

export default function TrailerList({items}) {
  return (
    <div className={styles['trailer-list']}>
      {items.map((i) => 
        <TrailerCard trailer={i} key={i.id} />
      )}
    </div>
  )
}
