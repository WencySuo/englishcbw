import Story from './Story.js';
import styles from './Home.module.css';

function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>SPRING 2025</h1>
                <h1 className={styles.subtitle}>ENGLISH CBW</h1>
            </div>
            <div className={styles.catalogHeader}>
                <h1 className={styles.catalogTitle}>Semester Catalog</h1>
            </div>
            <div>
                <ol className={styles.storyList}>
                    <li className={styles.storyItem}><Story/></li>
                    <li className={styles.storyItem}><Story/></li>
                </ol>
            </div>
        </div>
    );
}

export default Home;