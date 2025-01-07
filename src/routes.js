import Favoritos from "pages/Favoritos";
import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import Container from "components/Container";
import FavoritoProvider from "context/Favoritos";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </Container>
            </FavoritoProvider>
            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes;