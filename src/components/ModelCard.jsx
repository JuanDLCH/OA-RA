import { getModel } from '../utils/getModel'
import styles from '../styles/ModelCard.module.css'

export const ModelCard = ({ model }) => {
    const { title, link } = model
    // const imageUrl = getMovieImage(poster_path, 300)
    return (
        <li className={styles.modelCard}>
            {link}
            <div>{title}</div>
        </li>
    )
}