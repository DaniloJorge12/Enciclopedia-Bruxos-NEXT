import Header from "@/components/Header/Header";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.home}>
            <Header />

            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.heroContent}>
                    <p className={styles.subtitle}>
                        O MUNDO MÁGICO EM UM SÓ LUGAR
                    </p>

                    <h1>
                        Wizard<span>Dex</span>
                    </h1>

                    <p className={styles.description}>
                        Explore personagens, casas, patronos e histórias
                        do universo mágico de Harry Potter.
                    </p>

                    <Link
                        href="/personagens"
                        className={styles.button}
                    >
                        Explorar personagens
                    </Link>
                </div>
            </section>

            <section className={styles.about}>
                <p className={styles.sectionLabel}>
                    SOBRE A WIZARDDEX
                </p>

                <h2>O mundo mágico na palma da sua mão.</h2>

                <p>A WizardDex é uma enciclopédia digital criada para reunir informações sobre os personagens do universo mágico em um só lugar.</p>
            </section>

            <section className={styles.technologies}>
                <p className={styles.sectionLabel}>
                    TECNOLOGIAS
                </p>

                <h2>
                    Feita com código e magia.
                </h2>

                <div className={styles.techGrid}>
                    <div className={styles.techCard}>
                        <h3>Next.js</h3>
                        <p>Framework utilizado na aplicação.</p>
                    </div>

                    <div className={styles.techCard}>
                        <h3>React</h3>
                        <p>Construção dos componentes da interface.</p>
                    </div>

                    <div className={styles.techCard}>
                        <h3>Axios</h3>
                        <p>Consumo dos dados da API.</p>
                    </div>

                    <div className={styles.techCard}>
                        <h3>HP API</h3>
                        <p>Dados dos personagens do universo mágico.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
