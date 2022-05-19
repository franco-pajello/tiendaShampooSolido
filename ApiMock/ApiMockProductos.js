const productos = [{
    id: "0",
    nombre: "Shampoo graso",
    precio: 500,
    img: "/./img/shampoo-graso.jpg",
    detalle: "aaaaaa detalle detalle detalle",
    categoria: "shampoo"
  },
  {
    id: "1",
    nombre: "Shampoo normal",
    precio: 500,
    img: "/./img/shampoo-normal.jpg",
    detalle: "sssss detalle detalle detalle",
    categoria: "shampoo"
  },
  {
    id: "2",
    nombre: "Shampoo seco",
    precio: 500,
    img: "/./img/shampoo-seco.jpg",
    detalle: "ddddd detalle detalle detalle",
    categoria: "shampoo"
  },
 {
    id: "3",
    nombre: "Acondicionador",
    precio: 500,
    img: "/./img/acondicionador.jpg",
    detalle: "ddddd detalle detalle detalle",
    categoria: "acondicionador"
 },
 {
    id: "4",
    nombre: "Bálsamo labial",
    precio: 500,
    img: "/./img/balsamo-labial.jpg",
    detalle: "ddddd detalle detalle detalle",
    categoria: "balsamo"
 },
 {
    id: "5",
    nombre: "Jabon facial",
    precio: 500,
    img: "/./img/jabon-facial-para-piel-seca-rosas-2.jpg",
    detalle: "ddddd detalle detalle detalle",
    categoria: "jabon"
 },
 {
    id: "6",
    nombre: "Jabon organico",
    precio: 500,
    img: "/./img/jabon-organico-rosa.jpg",
    detalle: "ddddd detalle detalle detalle",
    categoria: "jabon"
 }
 ]

export const ApiProductos = (id) => {

  return new Promise((resolve) => {

    setTimeout(() => {
      const tipoDeTarjeta = id ?  productos.find(producto => producto.id === id) : productos

      return resolve(tipoDeTarjeta)

    }, 2000);

  })
}