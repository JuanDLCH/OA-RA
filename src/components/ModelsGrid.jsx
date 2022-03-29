import { useEffect, useState } from 'react'
//import { get } from '../utils/httpClient'
import { ModelCard } from './ModelCard'
import { Spinner } from './Spinner'
import styles from '../styles/ModelsGrid.module.css'
import modelsJSON from '../utils/models'

export const ModelsGrid = () => {
  const [models, setModels] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setModels([...modelsJSON])
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>Modelos visualizables</h1>
      <p>Haz click en cualquier tarjeta debajo para abrir el objeto en el visualizador de realidad aumentada de tu dispositivo móvil. <br /> 
      Estos objetos son compatibles con cualquier móvil con sistema operativo Android 8.1 o superior <br />
      También son compatibles con cualquier móvil con sistema operativo iOs 13.0</p>
      <ul className={styles.modelsGrid} >
        {models.map(model => (
          <ModelCard key={model?.id} model={model} />
        ))}
      </ul>
    </div>
  )
}
