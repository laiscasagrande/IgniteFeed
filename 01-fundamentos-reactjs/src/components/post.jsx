import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) { //faço uma desestruturação para pegar apenas as propriedades que eu quero
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
    addSuffix: true
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR
  })//essa variável é relativa à data atual, ou seja, publicado há não sei quanto tempo a partir de agora. Vai receber o parâmetro publishedAt e vai comparar com o agora

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((line) => { //eu vou percorrer o array content, vou passar por cada objeto que há dentro dele. Peguei a propriedade content que vem do componente pai e desestruturei para trabalhar com ele. AAsim, como ele á entende que é um array, eu percorro esse array e aplico funcionalidades
          if (line.type === "paragraph"){
            return <p>{line.content}</p> //como estou percorrendo o array content, estou acessando as propriedades type e content. Se a type foi igual a paragraph, vai exebir o conteúdo de todos os objetos que possuem type igual a paragraph
          }else if (line.type === "link"){
            return <p><a href="#">{line.content}</a></p>
          }
        })}
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