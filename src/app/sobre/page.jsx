import styles from './sobre.module.css';

export default function sobre() {
    return (
        <section className={styles.container}>
            <h1>Sobre o projeto</h1>
            <p className={styles.descricao}>
                Este espaço pode ser adaptado com a apresentação, missão ou contexto do seu projeto.
            </p>

            <div className={styles.mvvGrid}>
                <div className={styles.turma}>
                    <h3>🚀 Turma </h3>
                    <p>2TDS1</p>
                </div>
                <div className={styles.curso}>
                    <h3> 💻 Curso </h3>
                    <p>Curso de Desenvolvimento de Sistemas</p>
                </div>
                <div className={styles.Professores}>
                    <h3>👨‍🏫 Professores </h3>
                    <p>Thiago</p>
                    <p>Marcelo</p>
                </div>
                <div className={styles.integrantes}>
                    <h3>👤 Integrantes</h3>
                    <p>Pedro Urbano</p>
                    <p>Danilo Jorge</p>
                </div>
            </div>
        </section>
    );
}
