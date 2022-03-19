import styles from '../styles/ModelCard.module.css'

export const ModelCard = ({ model }) => {
    const { title, link, desc, ar } = model
    return (
        <li className={styles.modelCard}>
            <a href={ar} target='_blank' rel='noopener noreferrer'>            
            <div className='container'>
                <iframe src={link} frameborder="0" title='click me'></iframe>
                <h4><b>{title}</b></h4>
                <p>{desc}</p>
            </div>
            </a>
        </li>
    )
}