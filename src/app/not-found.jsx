import Link from "next/link";
import styles from "../app/not-found.module.css";

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Page not Found</h2>
                <p className={styles.text}>This page doesn't exist or may have been moved.</p>

                <div className={styles.buttons}>
                    <Link href='/'>Home</Link>
                </div>
            </div>
        </main>
    )
}