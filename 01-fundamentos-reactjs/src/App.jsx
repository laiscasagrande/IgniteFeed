import { Post } from './Post';

export function App() {
  return (
    <>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nemo saepe harum quas commodi soluta, minus laborum. Reprehenderit fuga cum dolor id, molestias, provident eum quaerat velit facilis nulla expedita." />
      <Post
        author="Gabriel Fernandes"
        content="Um novo post muitolegal" />
    </>//todos os elementos devem estar dentro de um elemento
  )
}
//O mesmo post com propriedades diferentes
//Um componente é uma função que retorna HTML
//Passei duas propriedades para o Post: author e content
