import { useEffect, useState } from 'react'
//import { get } from '../utils/httpClient'
import { VideoCard } from './VideoCard'
import { Spinner } from './Spinner'
import styles from '../styles/ModelsGrid.module.css'
import vidsJSON from '../utils/videos'

export const VidsGrid = () => {
  const [models, setModels] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setModels([...vidsJSON])
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>¿Realidad Virtual?</h1>
      <p>Ponte tus lentes y adentremonos en algunas experiencias únicas</p>
      <ul className={styles.appsGrid} >
        {models.map(model => (
          <VideoCard key={model?.id} model={model} />
        ))}
      </ul>
    </div>
  )
}