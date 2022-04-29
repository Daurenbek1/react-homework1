import styles from './Home.module.scss'
import Card from '../components/Card/Card'

const Home = () => {
    return (
        <>
            <h1 className={styles.title}>New & Notable</h1>
            <Card />
        </>
    )
}

export default Home