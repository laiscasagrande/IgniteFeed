import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) { //quero buscar apenas as propriedades hasBordere e src. Crio um objeto aqui dentro. E aqui eu posso definir valores default, nesse caso, o valor default dela é true

//eu posso usar desestruturação dentro do objeto
return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src} alt="" />
    )
}
//obs: as propridades são a única forma de eu avisar para o componente que eu quero que você tenha isso, não tenha isso, tenha essa funcionalidae, não tenha essa funcionalidade
//<img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} => o if serve para dizer se, caso a propriedade tenha borda, aplica o hasBorder, se não, aplica a estilização normal
//const hasBorder = props.hasBorder !== false //se a propriedade hasBorder for diferente de false, quer dizer que ele tem borda, ou seja se a propriedade não for nem enviada, ela tamém é diferente de false

//Desestruturação => const user = {name: "Diego", idade:"18"}
// const {name} = user -> eu coloco um objeto no lado esquerdo da minha operação. Aqui eu quero arrancar o nome de dentro do objeto user que eu declarei acima