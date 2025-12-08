
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
           <div className={styles.container}>
           <div className={styles.logoContainer}>
                <Link href="/" aria-label="Home">
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/sobre" className={styles.link}> 
                    Sobre
                </Link>
                <Link href="/especies" className={styles.link}>
                    Espécies
                </Link>
            </nav>
           </div>
        </header>
    )
}