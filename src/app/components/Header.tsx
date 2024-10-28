import styles from './Header.module.css';



const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>My Portfolio</h1>
        <nav className={styles.nav}>
            <li>
            <a href="/">Home</a>
            </li>
           <li>
            <a href="/About">About</a>
            </li>
            
            <li>
            <a href="/contact">Contact Us</a>
            </li>
        </nav>
    </header>
);

export default Header;
