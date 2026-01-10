
 class Productos {
    constructor(producto, modelo, tamaño, precio){
        this.producto = producto;
        this.modelo= modelo;
        this.tamaño = tamaño;
        this.precio =  precio;
    }
   
     show(){
         return`                  
         Producto: ${this.producto}.
         Modelo: ${this.modelo}.
         Tamaño: ${this.tamaño}.
         Precio:$ ${this.precio}.`;
     }
 }
class Camaras extends Productos {
  constructor(producto, modelo,tamaño,tarjetaMemoria,peso, tipoLente,precio) {
    super(producto, modelo, tamaño, precio);
    this.tarjetaMemoria= tarjetaMemoria;
    this.peso = peso;
    this.tipoLente = tipoLente;
    }
    show(){
         return `                 
         Producto es :${this.producto}.
         Modelo: ${this.modelo}.
         Dimenciones: ${this.tamaño}.
         Tarjeta Memoria: ${this.tarjetaMemoria}.
         Peso: ${this.peso}.
         Tipo de Lente: ${this.tipoLente}.
         Precio:$${this.precio}.`;
         
    }
}
 class Estuche extends Camaras{
    constructor (producto, modelo,tamaño,peso, color,material, bolsillos, resisteAgua,correa, precio){
        super(producto, modelo,tamaño,"Tarjeta SD",peso,"no aplica", precio);
        this.color=color;
        this.material= material;
        this.bolsillos= bolsillos;
        this.resisteAgua = resisteAgua;
        this.correa= correa;

    }
    show(){
         return `
         Producto: ${this.producto}. 
         Modelo: ${this.modelo}.
         Dimenciones: ${this.tamaño}. 
         Peso: ${this.peso}.
         Color: ${this.color}.
         Material: ${this. material}.
         Bolsillos: ${this.bolsillos}.
         Resistente al agua: ${this.resisteAgua}.
         Correa: ${this.correa}.
         Precio: $${this.precio}.`;
    }
 }

class Televisores extends Productos{
    constructor(producto, modelo, tamaño,resolución,categoria, precio){
        super(producto, modelo, tamaño, precio)
        this.resolución = resolución;
        this.categoria = categoria;
    }
    show(){
         return `
         Producto: ${this.producto}. 
         Modelo: ${this.modelo}.
         Tamaño: ${this.tamaño}.
         Resolución: ${this.resolución}.
         Categoria: ${this.categoria}.
         Precio: $${this.precio}.`;
    }

}

//instanciar al producto
const producto1 = new Productos( "Play Station", 2, "30 x 20cm", "200.000");
const camara1 = new Camaras("Camara Profesional","FX61", "9.5cm alto x 12.98cm ancho", "Tarjeta SD","509gr","Fijo","1.590.000");
const estuche1 = new Estuche("Estuche","Savage","15cm x 15cm","200gr","Verde","Eco-Cuero acolchado","Si","Si","No", "20.000");
const televisor = new Televisores("Televisor","Bravia","40 pulgadas","230 x255", "Smart TV","350.000");
   
/* mostrar en navegador*/
const btnVer = document.getElementById("ver");
const categoriaSelect = document.getElementById("selectProducto");
const detalleP = document.getElementById("detalleP");


  btnVer.addEventListener("click", () => {
  const categoria = categoriaSelect.value;
  let verProducto;

  switch (categoria) {
    case "producto":
      verProducto = producto1;
      break;
    case "camara":
      verProducto = camara1;
      break;
    case "estuche":
      verProducto = estuche1;
      break;
    case "televisor":
      verProducto = televisor;
      break; 
  }

 detalleP.innerHTML = `<pre>${verProducto.show()}</pre>`;

 console.log(producto1.show(),camara1.show(),estuche1.show(),televisor.show());

}
);
