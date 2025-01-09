import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container/index"
import Pie from "components/Pie/index"
import FavoritoProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

const PaginaBase = () => {
    return (

        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase