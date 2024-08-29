import { useFavoritoContext } from "../../Contexto/Favoritos";
import Style from "./Card.module.css"
import iconeFavoritar from "./Favoritar.png"
import iconeDesfavoritar from "./Desfavoritar.png"
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={Style.container}>
            <Link className={Style.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={Style.capa}/>
            <h2>{titulo}</h2>
            </Link>
            <img  src={icone}
             alt="Favoritar Filme"
             className={Style.iconeFavoritar} 
             onClick={() => {adicionarFavorito({id, titulo, capa})} }/>
        </div>
    )
}

export default Card;