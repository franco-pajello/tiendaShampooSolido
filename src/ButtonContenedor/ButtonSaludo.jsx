const ButtonSaludo = ({ parametro = hola }) => {
  return (
    <div>
      <button onClick={parametro}>click</button>
    </div>
  )
}

export default ButtonSaludo