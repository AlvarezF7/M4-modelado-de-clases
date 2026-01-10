

/* ESTA ENLAZADO AL TAXI.HTML*/
class Sumatoria {
  constructor(base) {
    this.base = base;
    this.incremento = 1;
    this.total = base;

     this.spanBase = document.querySelector(".base");
      this.spanBase.textContent = this.total;
    console.log(`Constructor Base: ${this.base} = Total inicial ${this.total}`);
  }

  sumar() {
   
    this.total += this.incremento;
    console.log(`Sumatoria: ${this.total - this.incremento} + ${this.incremento} = ${this.total}`);

    this.incremento++;
    this.spanBase.textContent = this.total;
     
  }
}
const baseAleatoria = Math.floor(Math.random() * 10) + 1;
const sumatoria = new Sumatoria(baseAleatoria);

const btnSuma = document.querySelector("#suma");
    btnSuma.addEventListener('click', ()=> sumatoria.sumar());
    console.log(sumatoria);