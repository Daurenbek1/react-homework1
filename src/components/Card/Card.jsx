import styles from './Card.module.scss'

import CardItem from '../CardItem/CardItem'

const cards = [
    {name: 'The Life Lessons', descr:'The Life Lessons is the book about self education and...', price: '65.00', url:'http://scientia.themerex.net/wp-content/uploads/2019/06/8pr-copyright.png'},
    {name: 'The Untold Tales', descr:'One of the biggest art projects in the world of...', price: '62.00', url:'http://scientia.themerex.net/wp-content/uploads/2019/06/1pr-copyright.png'},
    {name: 'Hobbye Lobbye', descr:'A great story about politicians and their secret private life...', price: '49.00', url:'http://scientia.themerex.net/wp-content/uploads/2019/06/2pr-copyright.png'},
    {name: 'Where They Sing', descr:'The best selling novel of all times about love and...', price: '58.00', url:'http://scientia.themerex.net/wp-content/uploads/2019/06/7pr-copyright.png'}
]

const Card = () => {
    return (
        <div className={styles.card}>
            <CardItem cards={cards}/>
        </div>
    )
}

export default Card