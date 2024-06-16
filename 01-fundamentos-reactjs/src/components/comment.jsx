import styles from './comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/laiscasagrande.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContext}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de maio às 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={2}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>28</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}