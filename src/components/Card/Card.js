import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import iconFavorito from "./iconFavorito.png"
import iconNoFavorito from "./iconNoFavorito.png"
import { useFavoritosContext } from 'context/Favoritos'
const Card = ({ id, titulo, capa }) => {

    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(item => item.id === id)
    const icon = isFavorito ? iconFavorito : iconNoFavorito

    return (
        <div className={styles.container}>
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon} alt="Icono favorito" onClick={() => agregarFavorito({ id, titulo, capa })} />

        </div>
    )
}

export default Card