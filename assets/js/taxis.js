//modela distintas clases de taxis

class TaxiTradicional{
    constructor(modelo, color, cantidadPasajeros, patente, conductor){
        this.modelo = modelo;
        this.color = color;
        this.cantidadPasajeros = cantidadPasajeros;
        this.patente= patente;
        this.conductor = conductor;
       
    }  
   //metodo
   show(){
     return `Tu taxi es Modelo: ${this.modelo}, Color: ${this.color}, Pasajeros: ${this.cantidadPasajeros}, 
        Patente: ${this.patente}, Conductor: ${this.conductor}`
   }
}
//clase hija
class TaxiParticular extends TaxiTradicional{
    constructor(modelo, color, cantidadPasajeros, patente, conductor, categoria){
    super(modelo,color,cantidadPasajeros, patente, conductor);
    this.categoria= categoria;
 }
  show(){
     return `Tu taxi es Modelo: ${this.modelo}, Color: ${this.color}, Pasajeros: ${this.cantidadPasajeros}, 
     Patente: ${this.patente}, Conductor: ${this.conductor}, Categoria: ${this.categoria}`
 }
}

class TaxiCargo extends TaxiParticular{
    constructor(modelo,color, patente, categoria, tipoDeCarga,pesoCarga){
        super(modelo, color, 2, patente, "Licencia C", "Carga")
        this.tipoDeCarga= tipoDeCarga;
        this.pesoCarga= pesoCarga;
    }
 show(){
  
  return`Tu taxi es Modelo: ${this.modelo}, Color: ${this.color}, Patente: ${this.patente},
   Categoria: ${this.categoria}, Tipo de Carga: ${this.tipoDeCarga}, Peso: ${this.pesoCarga}`
   
 }
   
}

//instanciar  los taxis
 const taxiNormal = new TaxiTradicional("Sedan", "Negro con techo amarillo",4,"GTAO66","Licencia A1", "Tradicional");
 const taxiExpress = new TaxiParticular( "City-car", "Verde",4, "GTPO25","Licencia B","Express");
 const taxiPremium = new TaxiParticular("SUV", "gris",6,"ZOOP52", "Licencia B", "Premium");
 const taxiCargo = new TaxiCargo("Camioneta","blanca","AOID32","Carga","Encomienda","5Kg");

/*taxiNormal.show();
taxiExpress.show();
taxiPremium.show();
taxiCargo.show();*/

const mostrarTaxi = document.getElementById("mostrarTaxi");
const categoriaSelect = document.getElementById("categoriaTaxi");
const detallet = document.getElementById("detalleTaxi");

mostrarTaxi.addEventListener("click", () => {
  const categoria = categoriaSelect.value;
  let taxiElegido;

  switch (categoria) {
    case "Tradicional":
      taxiElegido = taxiNormal;
      break;
    case "Express":
      taxiElegido = taxiExpress;
      break;
    case "Premium":
      taxiElegido = taxiPremium;
      break;
    case "Carga":
      taxiElegido = taxiCargo;
      break;
  }

  // muestra en pantalla el show
  detallet.innerHTML = `<p>${taxiElegido.show()}</p>`;
});
 console.log(taxiNormal.show());