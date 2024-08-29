import Card from "../../components/Card/index"
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css"
import { useFavoritoContext } from "../../Contexto/Favoritos";


function Favoritos (){

    const {favorito} = useFavoritoContext()
    return(
        <>
           <Banner imagem="Favoritos" />
        <Titulo>
            <h1>Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            })}
            </section>
       
        </>
    )
}

export default Favoritos
