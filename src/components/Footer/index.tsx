
import Link from 'next/link';
import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>© {new Date().getFullYear()} Cat App. Todos os direitos reservados.</p>
                <div className={styles.links}>
                    <Link href="/sobre" className={styles.link}>Sobre</Link>
                    <Link href="/politica-de-privacidade" className={styles.link}>Politica de Privacidade</Link>
                </div>
            </div>
        </footer>
    )
}