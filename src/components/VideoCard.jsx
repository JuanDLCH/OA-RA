import styles from '../styles/ModelCard.module.css'

export const VideoCard = ({ model }) => {
    const { title, link, desc } = model
    return (
        //Tarjeta con imagen, texto y descripcion
        <li className={styles.modelCard}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className='container'>
            <iframe src={link} title="Montaña Rusa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4><b>{title}</b></h4>
                <p>{desc}</p>
            </div>
            </a>
        </li>
    )
}