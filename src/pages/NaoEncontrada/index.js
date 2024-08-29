import styles from './MaoEncontrada.module.css';

function NaoEncontrada () {
    return(
        <section className={styles.container}>
            <h2>Ops...</h2>
            <p>O conteudo que você procura nao foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;