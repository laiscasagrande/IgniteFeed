import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment({content, OndeleteComment}) {

   function handleDeleteComment(){ //essa é uma forma do componente filho se comunicar com o componente pai, pois quando o usuário clicar em um botão que está neste componente, vai ser disparada e executada uma função que está no componente pai
    OndeleteComment(content) //passei a função de deletar comentário, que estou trazendo por props, para dentro desta. Estou passando a única informação que eu tenho do comentário para a função, que é seu conteúdo. Melhor seria se tivéssemo o id do comentário, mas não temos
   }
//Como o estado que armazena os comnetários está no componente pai, eu criei uma função lá para deletar os comentários e passei essa função por props e acessei aqui. Como eu preciso de um id ou alguma coisa para identificar o comentário, eu passei o conteúdo do comentário, que é a única informação que eu tenho
//Ao chamar a propriedade OndeleteComment(content) e passar content como parâmetro, ele vai entender que é o argumento que eu passei e vai executar o que está dentro da função com a informação content
return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/laiscasagrande.png" alt="" /> {/*o hasBorder serve para dizer que eu não quero a borda neste caso. Tenho que colocar o false entre as chaves porque se eu colocar entre aspas ele vai entender como texto*/}
            <div className={styles.commentBox}>
                <div className={styles.commentContext}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de maio às 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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
//Se você perceber que alguma coisa se repete em muitas telas e tem o mesmo layout, essa coisa deve virar um componete
//Outra situação, é quando você consegue tirar um componente de um compoente maior sem alterar a funcionalidade, ou seja, se você perceber que pode tirar aquele trecho de código dali sem alterar sua funcionalidade, componentize ele.
//Por exemplo, supomos que há uma tela com listagem de usuário e também há um botão que reliza a função de fazer upload de algum arquivo. 
//Como a parte da manutenção daquele botão é muito complexa, você não precisa realiar junto com o código que exibe os usuários na tela,
//pois ficaria muito bagunçado. Você pode fazer toda a manutenção daquele botão em um arquivo separado e trazer na tela onde exibe 
//os usuário. Você tra ele como um componente

//Logo, existem dois casos para componentização: o primeiro, quando algo aparece repetidamente. Segundo, quando você pode dar manuteção em um componente em outro arquivo sem aletrar sua funcionalidade para ser mais fácil de dar manutenção

//Mas, cuidado! Não é sempre que você vai sair componentizando tudo. Supondo que você tenha na tela dois botões semelhantes,
//mas um deles te um  ícone. É muito mais fácil você criar dois componentes do que fazer um só e programar toda um lógica para o ícone aparecer em um caso e em outro não.