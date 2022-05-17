

const ApiMockProductos =[
  { id: "0", nombre: "Shampoo graso", precio: 500, img: "./img/shampoo-graso.jpg" },

] 

export  const ApiProductos=(productos)=>{

 return new Promise((resolve) => {

    setTimeout(() => {
      resolve(productos={ApiMockProductos})
    }, 2000);
  
  })
}