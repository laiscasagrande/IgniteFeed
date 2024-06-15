import { Post } from './components/post';
import { Header } from './components/header';

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar/>
        <main> <Post
          author="Diego Fernandes"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nemo saepe harum quas commodi soluta, minus laborum. Reprehenderit fuga cum dolor id, molestias, provident eum quaerat velit facilis nulla expedita." />
           <Post
            author="Gabriel Fernandes"
            content="Um novo post muitolegal" /> 
            </main>
      </div>
    </>//todos os elementos devem estar dentro de um elemento
  )
}
//O mesmo post com propriedades diferentes
//Um componente é uma função que retorna HTML
//Passei duas propriedades para o Post: author e content
