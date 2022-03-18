import { useEffect, useState } from 'react'
//import { get } from '../utils/httpClient'
import { ModelCard } from './ModelCard'
import { Spinner } from './Spinner'
import styles from '../styles/ModelsGrid.module.css'
import modelsJSON from '../utils/models'

export const ModelsGrid = () => {
    const[models, setModels] = useState([])
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
    <ul className={styles.modelsGrid} >
    {models.map(model => (
        <ModelCard key={model?.id} model={model} />
    ))}
    </ul>
  )
}
