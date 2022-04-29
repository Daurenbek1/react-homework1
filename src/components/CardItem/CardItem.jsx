import styles from './CardItem.module.scss'

import { FaCalendar, FaScribd } from "react-icons/fa";

const CardItem = ({cards}) => {
    return (
        <>
            {cards.map(card => 
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={card.url}></img>
                        <span className={styles.basket}><FaCalendar className={styles.icon}/></span>
                        <span className={styles.link}><FaScribd className={styles.icon}/></span>
                    </div>
                    <h3>{card.name}</h3>
                    <p>{card.descr}</p>
                    <div>${card.price}</div>
                </div>
            )}
        </>
    )
}

export default CardItem