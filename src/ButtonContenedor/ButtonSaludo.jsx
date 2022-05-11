const ButtonSaludo = ({ parametro = hola }) => {
  return (
    <div>
      <button onClick={parametro}>Click</button>
    </div>
  )
}

export default ButtonSaludo