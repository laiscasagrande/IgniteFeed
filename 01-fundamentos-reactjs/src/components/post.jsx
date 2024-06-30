import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/diego3g.png"/>
          <div className={styles.authorInfo}>
            <strong>Laís Kaminski Casagrande</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime='2022-05-11 08:13:30'>Publicado há uma hora</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href=""> jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>

      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article >
  )
}

//Ali no hasBorder do avatar, eu não preciso passar true: hasBorder={true}, eu posso deixar ele sozinho, pois o react já vai entender que o valor dela é true