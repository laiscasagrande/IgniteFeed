export function Post(props) { //posso acessar essas propriedades como parâmetros da minha função
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  )
}
//Em exportações default, você pode dar um nome diferente na importação