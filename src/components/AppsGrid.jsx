import { useEffect, useState } from 'react'
//import { get } from '../utils/httpClient'
import { AppCard } from './AppCard'
import { Spinner } from './Spinner'
import styles from '../styles/ModelsGrid.module.css'
import modelsJSON from '../utils/apps'

export const AppsGrid = () => {
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
      <h1>Modelos descargables</h1>
      <p>Haz click en cualquier tarjeta debajo para descargar una apk, una vez instalada podrás interactuar con el objeto. <br /> 
      Estos objetos son sólo compatibles con dispositivos que tengan Android 6.0 en adelante, abre la cámara y apunta hacia el marcador que le corresponde.</p>
      <ul className={styles.appsGrid} >
        {models.map(model => (
          <AppCard key={model?.id} model={model} />
        ))}
      </ul>
    </div>
  )
}