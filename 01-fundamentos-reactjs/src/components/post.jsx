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
 "Post muito bacana, hein?"
])

const [newCommentText, setNewCommentText] = useState('') //Vou armazenar o que foi digitado na textarea. Eu sempre tenho que inicializar o estado de acordo com o tipo da variável que estou trabalhando. Nesse caso, como é um texto, inicializei com ''.
//Esse estado armazena, em tempo real, tudo que é digitado na textarea

function handleCreateNewComment(){
  event.preventDefault() //O comportamento padrão do html quando o usuário clica em um botão submit é direcionar o usuário para outra página. Esse evento impede isso, pois eu só tenho uma página na minha aplicação. Se eu não tiver esse evento, vai dar vários erros no console, pois o comportmanrto do html é direcionar o usuário a outra página, como só tenho uma página, vai dar vários erros. Por isso, preciso colocar esse evento
  //Como faço para adicionar um novo comentário? Pensa assim: se eu tenho um array de comentários, o comentário que o usuário digitar vai ter que ser adicionado ao meu array de comentários
//comments.push(3) //o push adiciona uma nova informação no meu array
//O problema, é que não vai aparecer um terceiro comentário quando eu clicar no botão. Até vai adicionar o 3 no array, mas não vai acrescentar um novo comentário. Isso acontece porque o react não vai ficar monitrando cada vez que o array comments mudar, pois isso não seria tão performático. Para resolver isso, eu tenho que usar um estado.
//setComments([1, 2, 3])//eu preciso passar para essa função qual é o novo valor da variável comments. Qula é o novo valor que a variável comments vai receber. Obs: nesse caso, o valor está fixo, ou seja, o valor sempre vai ser 1, 2 e 3. Se eu adicionar mais um comentário, não vai aparecer.
//O novo valor vai ser um array contendo os valores 1, 2 e 3. Eu não passo somente o valor que eu quero inserir. Eu passo qual é o novo valor. Ou seja, o valor antes era [1, 2]. Agora, o novo valor é [1, 2 e 3]
//const newCommentText = (event.target.comment.value) //Se eu dou um event.target, ele vai me retornar o forumlário, porque o onSubmit está no formulário. O event.target sempre vai mostrar/retornar qual é o elemento que está recebendo aquele evento. Mas, como ele sabe que estou enviando esse valor para a textarea? Para isso, coloco um name na textarea e trago aqui. Para trazer o que foi digitado nela, coloco o value. Estou guardando em uma variável o que o usuário digitar. Agora, ele vai guardar no array o que o usuário digitar
setComments([...comments, newCommentText]) //Para que não seja mais um valor fixo, eu vou pegar tudo que está em comments. Depois, pego a quantidade de valores, o tamanho do array comments e acrescento mais um valor. Se eu fizer isso, vai sempre acrescentar mais 1 ficando dessa dorma: 1, 2, 3, 4, 5, 6, etc. Se eu colocar um valor fixo, 3, por exemplo, ele até vai adicionar, mas ficará assim: 1, 2, 3, 3, 3, 3, etc. 
//event.target.comment.value = '' //vai limpar a textarea quando o usuário clicar no botão. Quando ele clicar, vai disparar a função e executar tudo que está dentro dela, inclusive isso
setNewCommentText('') //Perceba que não usei a programação imperativa, ou seja, eu não precisei dizer que "1 - Pegue a textarea, 2 - Limpe o valor da textarea cujo nome é comment"; eu fiz uma consição. Então, como a textarea recebeu o valor newCommentText, ela sempre vai ter o valor do newCommentText, assim, ela só vai mostrar o valor em branco com a condição de eu setar essa variável como uma string vazia.
}

function handleNewCommentChange(){
  event.target.setCustomValidity('') //quando houver alguma coisa para guardar na variável newCommentText, ele torna o setCustomValidity como vazio, para, depois que der o erro e eu digitar alguma coisa, não der erro de novo
  setNewCommentText(event.target.value) //eu guardo, através do value, o que o usuário digitou na minha função, que é um estado, e mostro a variável newCommentText no setComment. Percebeu que o que está na textarea sempre vai depender do que acontece com a variável newCommentText? Sempre vai ser auma consição. Se essa variável for setada como string vazia, a textarea vai estar vazia com a consdição de esta variável ser setada como vazia
}

//mesmo o botão de deletar comentário estando em outro componente, eu só posso acessar aqui o estado que controla os comentários que existem dentro do meu post. Depois, passo essa função por props
function deleteComment(commentToDelete){ //esse é o argumento, a informação que estamos passando para a função, isto é, estamos passando o ingrediente para ela fazer a receita. O argumento é como se fosse uma laranja e a função é a receita do suco de laranja. Neste caso, o ingrediente é o comentário que queremos remover e a receita é exclusão desse comentário
  //console.log(`Deletar comentário ${comment}`)//Estamos passando o comentário que queremos remover como argumento
 const commentsWithoutDeleteOne = comments.filter(comment => { //Para eu fazer isso, eu tenho que criar uma nova lista de comentários sem o comentário que ue não quero mais
return comment !== commentToDelete //eu estou criando uma lista no qual estou filtrando os comentários que são diferentes dos que eu quero excluir. Isso vai gerar uma nova lista sem o comentário que eu deletei
 }) 
 //o filter é um método que vai percorrer cada comentário e, se eu retornar true, ele vai manter na lista, e se eu retornar false, ele vai remover da lista aquele item 
 setComments(commentsWithoutDeleteOne) //chamo a função responsável por guardar os comentários
//imutabilidade -> as variáveis não sofrem mutação, ou seja, nunca alteramos o valor de uma variável na memória da nossa aplicação. Nós criamos um novo valor, isto é, um novo espaço na memória. Quano chamamos a função setComments, nós nõ estamos atualizando a variável comments, nós, na verdade, estamos criando um novo valor par a variável comments. Resumindo, a variável não altera seu valor, apenas cria um novo espaço na memória.
}
//Explicando melhor a lógica de comentários, eu não estou removendo de fato. Eu, primeiramente, estou passando um argumento commentToDelete, que representa cada comentário. Eu acesso esse argumento, essa informação la no componente filho(). Assim, cada vez que eu clicar em um comentárip, essa função vai criar uma lista sem o comentário que ue cliquei.
//eu não precisei chamar todos os comentário de novo (...comments) porque estou literalmente criando uma nova lista, e nao acrescentando mais uma informação
//Para eu ter essa lógica, eu tenho que pensar o que ue quero que aconteça com a lista de comentários após a remoção de um. Eu quero que ela mostre todos os comentários menos aquele que eu excluí. Isso também explica o conceito de imutabilidade, pois, quando eu clicar na lixeira, a variável comments não vai sofrer uma alteração de excluir um item, por exemplo. Ao clicar na lixeira, o comentário não vai ser excluído, só vai ser filtrado os comentários sem aquele que eu "deletei"
//Nesse caso, não vai ser feita nenhuma alteração na variável. Qaundo o usuário clicar na lixeira, a função setCommnets vai fazr um filtro sem o comentário que eu cliquei 

function handleNewCommentInvalid(){
//o setCustomValidity é o método que a gente usa para identificar, falar qual é mensagem  de validação que a gente quer para essa textarea
event.target.setCustomValidity('Esse campo é obrigatório!')
}
//target é o elemnto, que pode ser uma textarea, um input.

const isNewCommentEmpty = newCommentText.length === 0 //é mais legível colocar condicionais fora do html. Isso é clean code
//como essa variável está guardando tudo que é digitado dentro da textarea, se não tiver nenhum caracter, o botão estará desabilitado. Parou de ser disables porque o estado foi alterado e, se o estado foi alterado, o componente é renderizado de novo e o react percebeu que agora a variável, com a alteração, tem um valor

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
             return <p key={line.content}>{line.content}</p> //como estou percorrendo o array content, estou acessando as propriedades type e content. Se a type foi igual a paragraph, vai exebir o conteúdo de todos os objetos que possuem type igual a paragraph. Como é uma lista, precisa de uma key. Eu posso identificar cada parágrafo pelo seu conteúdo. O react não se importa se identificarmos uma lista dentro de um componente desta forma. Ela precisa ser única dentro daquele componente. Se tiver outro componente com a mesma key o react não vai se importar, pois, para esse componente, essa key é única
          }else if (line.type === "link"){
            return <p key={line.content}><a href="#">{line.content}</a></p> //Aqui a key precisa ir em ambos os parágrafos, pois um desses parágrafos pode aparecer 
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}> {/*A função que estiver dentro do onSubmit vai ser disparada quando o usuário clicar no botão*/}
        <strong>Deixe seu feedback</strong>
        <textarea 
        placeholder='Deixe um comentário' 
        name="comment"
        onChange={handleNewCommentChange} 
        value={newCommentText} //como estou passando como valor para a textarea a variável responsável por guardar os comentários, cada vez que a variável mudar, a textarea vai refletir. Assim, quando eu submitar o formulário, a variável newCommentText vai ser setada como vazia
        required
        onInvalid={handleNewCommentInvalid} //essa propriedade é chamada sempre que o html identificar que a gente tentou realizar um onSubmit mas o campo, neste caso a textarea, é inválido, ou seja, não foi preenchido.
        /> {/*Eu tenho que pegar o que o usuário diigtar na textarea e mostrar no lugar de comments.length + 1. Pois vou estar passando tudo que já tem no array comments e acrescentar mais o que o usuário digitar*/}
        <footer>
          <button type="submit"
          disabled={isNewCommentEmpty} 
          >Publicar</button>
        </footer>
      </form>
{/*O onChange da textarea serve para monitorar a textarea para toda vez que ela sofrer alguma ação. Então cada vez que o usuário digitar clicar na textarea, eu vou fazer alguma operação*/}
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} 
          OnDeleteComment={deleteComment}/> //estou passando por props o que está vindo do meu array. Como esse array não tem uma key, posso passar o próprio comentário. O react não se importa se você passar desta forma, ele só quer alguma coisa que identifique aquele componente como único
        })} {/*Comecei o nome da propriedade com On para dizer que, quando o usuário clicar no botão deletar, seja disparada uma função*/}
      </div>
    </article >
  )
}

//Ali no hasBorder do avatar, eu não preciso passar true: hasBorder={true}, eu posso deixar ele sozinho, pois o react já vai entender que o valor dela é true