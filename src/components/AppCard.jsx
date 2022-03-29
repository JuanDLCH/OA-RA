import styles from '../styles/ModelCard.module.css'

export const AppCard = ({ model }) => {
    const { title, link, desc, img } = model
    return (
        //Tarjeta con imagen, texto y descripcion
        <li className={styles.modelCard}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className='container'>
                <img className={styles.imagen} src={img} alt='model' />
                <h4><b>{title}</b></h4>
                <p>{desc}</p>
            </div>
            </a>
        </li>
    )
}