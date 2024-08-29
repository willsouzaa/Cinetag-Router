import Styles from "./Container.module.css";

function Container ({children}) {
    return(
        <section className={Styles.Container}>
            {children}

        </section>
    )
}

export default Container;