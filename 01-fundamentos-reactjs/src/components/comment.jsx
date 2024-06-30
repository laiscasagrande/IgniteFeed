import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
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
//Se você perceber que alguma coisa se repete em muitas telas e tem o mesmo layout, essa coisa deve virar um componete
//Outra situação, é quando você consegue tirar um componente de um compoente maior sem alterar a funcionalidade, ou seja, se você perceber que pode tirar aquele trecho de código dali sem alterar sua funcionalidade, componentize ele.
//Por exemplo, supomos que há uma tela com listagem de usuário e também há um botão que reliza a função de fazer upload de algum arquivo. 
//Como a parte da manutenção daquele botão é muito complexa, você não precisa realiar junto com o código que exibe os usuários na tela,
//pois ficaria muito bagunçado. Você pode fazer toda a manutenção daquele botão em um arquivo separado e trazer na tela onde exibe 
//os usuário. Você tra ele como um componente

//Logo, existem dois casos para componentização: o primeiro, quando algo aparece repetidamente. Segundo, quando você pode dar manuteção em um componente em outro arquivo sem aletrar sua funcionalidade para ser mais fácil de dar manutenção

//Mas, cuidado! Não é sempre que você vai sair componentizando tudo. Supondo que você tenha na tela dois botões semelhantes,
//mas um deles te um  ícone. É muito mais fácil você criar dois componentes do que fazer um só e programar toda um lógica para o ícone aparecer em um caso e em outro não.