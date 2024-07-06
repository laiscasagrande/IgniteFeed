import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

// const comments = [
//   1,
//   2, 
//   ]

export function Post({ author, publishedAt, content }) { //faço uma desestruturação para pegar apenas as propriedades que eu quero
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
    addSuffix: true
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR
  })//essa variável é relativa à data atual, ou seja, publicado há não sei quanto tempo a partir de agora. Vai receber o parâmetro publishedAt e vai comparar com o agora

//Estado: estados são variáveis que eu quero que o componente monitore. Ou seja, sempre que uma variável mudar de valor, sofrer alguma mudança, o react vai mostrar. Ele fica monitorando aquela variável para que, sempre que ela mudar, o react mostrar a alteração que aconteceu
//O useSate sempre retorna um vetor(array) com duas posições. A primeira posição vai ser a variável de fato. O que eu faço com essa variável? Mostro em tela o que foi alterado, modificado. Já a segunda posição, é uma função pra mim alterar a variável. Ou seja, é com essa função que eu faço diversas ações na minha variável.
//Por que eu tenho que ter uma função para alterar o valor de uma variável? Por que eu simplesmente não faço as ações direto na variável? Porque se você só mexer, alterar, fazer alguma ação direto na variável, como o react vai enteder que o valor daquela variável foi mexido? Foi o que aconteceu com o const array de comentários. Como eu mexi diretamente no const (variável), o react não entedeu que aquela const mudou, porque eu mexi diretamente nela. Para resolver isso, eu preciso de um estado, ou seja, eu preciso monitorar cada vez que uma variável sofrer alguma alteração.
//É como se eu tivesse avisamdo o react que aquela variável sofreu alguma lateração. Eu aviso o react para ele mostrar para mim o que aconteceu.

const [comments, setComments] = useState([ //A função setComments não só altera o valor da variável, como também avisa para o react que aquela variável sofreu uma alteração. "React, eu alterei a lista de comentário. Mostra pra mim essa lista atualizada."
  1,
  2
])

function handleCreateNewComment(){
  event.preventDefault() //O comportamento padrão do html quando o usuário clica em um botão submit é direcionar o usuário para outra página. Esse evento impede isso, pois eu só tenho uma página na minha aplicação. Se eu não tiver esse evento, vai dar vários erros no console, pois o comportmanrto do html é direcionar o usuário a outra página, como só tenho uma página, vai dar vários erros. Por isso, preciso colocar esse evento
  //Como faço para adicionar um novo comentário? Pensa assim: se eu tenho um array de comentários, o comentário que o usuário digitar vai ter que ser adicionado ao meu array de comentários
//comments.push(3) //o push adiciona uma nova informação no meu array
//O problema, é que não vai aparecer um terceiro comentário quando eu clicar no botão. Até vai adicionar o 3 no array, mas não vai acrescentar um novo comentário. Isso acontece porque o react não vai ficar monitrando cada vez que o array comments mudar, pois isso não seria tão performático. Para resolver isso, eu tenho que usar um estado.
//setComments([1, 2, 3])//eu preciso passar para essa função qual é o novo valor da variável comments. Qula é o novo valor que a variável comments vai receber. Obs: nesse caso, o valor está fixo, ou seja, o valor sempre vai ser 1, 2 e 3. Se eu adicionar mais um comentário, não vai aparecer.
//O novo valor vai ser um array contendo os valores 1, 2 e 3. Eu não passo somente o valor que eu quero inserir. Eu passo qual é o novo valor. Ou seja, o valor antes era [1, 2]. Agora, o novo valor é [1, 2 e 3]
setComments([...comments, comments.length + 1]) //Para que não seja mais um valor fixo, eu vou pegar tudo que está em comments. Depois, pego a quantidade de valores, o tamanho do array comments e acrescento mais um valor. Se eu fizer isso, vai sempre acrescentar mais 1 ficando dessa dorma: 1, 2, 3, 4, 5, 6, etc. Se eu colocar um valor fixo, 3, por exemplo, ele até vai adicionar, mas ficará assim: 1, 2, 3, 3, 3, 3, etc. 
}

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

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}> {/*A função que estiver dentro do onSubmit vai ser disparada quando o usuário clicar no botão*/}
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment />
        })}
      </div>
    </article >
  )
}

//Ali no hasBorder do avatar, eu não preciso passar true: hasBorder={true}, eu posso deixar ele sozinho, pois o react já vai entender que o valor dela é true