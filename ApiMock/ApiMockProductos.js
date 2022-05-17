
const productos = [
  { id: "0", nombre: "Shampoo graso", precio: 500, img: "/assets/img/shampoo-graso.jpg", detalle:"aaaaaa detalle detalle detalle" },
  { id: "1", nombre: "Shampoo normal", precio: 500, img:"./img/shampoo-normal.jpg",detalle:"sssss detalle detalle detalle" },
  { id: "2", nombre: "Shampoo seco", precio: 500, img: "./img/shampoo-seco.jpg", detalle:"ddddd detalle detalle detalle" }
]

export  const ApiProductos=(id)=>{

 return new Promise((resolve) => {

    setTimeout(() => {
     const tipoDeTarjeta = id ? productos.find(producto=>producto.id === id) : productos
        
     return resolve (tipoDeTarjeta)

    }, 2000);
  
  })
}