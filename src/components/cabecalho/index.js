import { Link } from "react-router-dom";
import logo from './Logo-cinetag-branco 1.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "../CabecalhoLink";
function Cabecalho () {
    return(
        <header className={styles.Cabecalho}>
            <Link to="./">
            <img src={logo} alt="Logo do cinetag"></img>

            </Link>
            <nav>
        <CabecalhoLink url='./'>
        home
        </CabecalhoLink>
        <CabecalhoLink url='./Favoritos'>
        Favoritos
        </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;