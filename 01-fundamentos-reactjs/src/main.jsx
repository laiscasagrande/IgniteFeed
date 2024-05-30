import React from 'react' //É o coração do react, o pacote que contém tudo relacionado ao reac. Não importa se é react native, react tv(pra televisão).
import ReactDOM from 'react-dom/client' //A DOM(Document Objective Model) é a representação do html através do javascript. Quando importamos o DOM, nós estamos fazendo com que o js funcione no ambiente web
import {App} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( //recebe o parâmetro root que é a raíz do nosso html
  <React.StrictMode> {/*Componentes do react*/}
    <App /> {/*Está renderizando(mostrando em tela) o nosso app*/}
  </React.StrictMode>,
)
//Criar o html e tudo que o usuário utiliza a partir do javaScript
//O react permite que o javascrip domine, sem ele, não aparece nada, nem o html