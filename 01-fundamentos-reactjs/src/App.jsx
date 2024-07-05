import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts = [ //array de posts
  { //como eu tenho vários posts com diferentes informções, cada objeto vai representar um post
    id: 1,
    author: { //como eu tenho mais de um tipo de autor, eu vou fazer um objeto para autor
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [//Importante: nunca deixar o backend retornar html, pois um usuário mal intencionado pode colocar um script no seu html e seu site passará a ter um script realizado por outro usuário
      { type: "paragraph", content: "Fala galeraa 👋" }, //para cada linha do post, vou retornar um objeto
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-05-03 20:00:00") //coloquei o Date porque eu realmente quero que seja uma data
  },//É sempre bom retornar o valor bruto. Para isso, existem laguma formatações de texto. Aqui, vamos assumir um array para cada comentário do post
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Maik Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2024-05-10 20:00:00")
  }
]
//Iteração: repetir alguma coisa. Criar um estrutura de repetição. Iterar sobre um array -> percorrer o array e para cada posição do array vou fazer alguma coisa

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => { /*diferente do forEach, o map retorna um valor. Assim, como ele retorna, ele exibe em tela*/ 
        return (  /*coloco o return porque preciso retornar alguma coisa*/
        <Post
        author= {post.author} //author, content e publishedAt são os nomes das propriedades que eu estou passando para o componente post
        content={post.content} //a propriedade content está pssando content, que é um array de parágrafos e link, que está dentro do array principal
        publishedAt={post.publishedAt}
        />
        )
          })}
        </main>
      </div>
    </>//todos os elementos devem estar dentro de um elemento
  )
}
//O mesmo post com propriedades diferentes
//Um componente é uma função que retorna HTML
//Passei duas propriedades para o Post: author e content

/*<main>
{posts.forEach(post => {
  {o array posts que defini lá em cima. Agora, vou iterar sobre o array, ou seja, vou percorrer os posts. Como vou percorrer um array, vou utilizar o forEach*/ 
  //<Post />
//})} para cada item do post, vou colocar o componente <Post/>*/}
//</main> O que o método forEach faz? O método forEach percorre o array, ou seja, ele percorre cada item, objeto dentro do array, mas, ele não retorna nada, ou seja, como ele não retorna nada, ele não vai mostrar nada. Como quero mostrar algo na tela, não uso forEach nestes casos
//Assim, como ele não retorn nada, ele vai ser definido como void(void é quando uma função realiza uma ação, mas não retorna nada)