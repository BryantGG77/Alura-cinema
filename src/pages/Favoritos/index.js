import Banner from "components/Banner"
import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import Card from "components/Card"
import { useFavoritosContext } from "context/Favoritos"
const Favoritos = () => {

    const { favorito } = useFavoritosContext()
    return (
        <>
            <Banner img="favoritos" color="#154580" />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => <Card key={fav.id} {...fav} />)}
            </section>
        </>
    )
}

export default Favoritos;