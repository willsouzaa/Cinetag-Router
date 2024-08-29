import Cabecalho from "../../components/cabecalho";
import FavoritosProvider from "../../Contexto/Favoritos";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Container from "../../components/Container"; 


function PaginaBase () {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase;