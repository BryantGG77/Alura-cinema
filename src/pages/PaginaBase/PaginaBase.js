import Cabecera from "components/Cabecera/Cabecera.js"
import Container from "components/Container/Container.js"
import Pie from "components/Pie/Pie.js"
import FavoritoProvider from "context/Favoritos.js"
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