export class Nodo {
  value;
  siguiente;
  constructor() {
    this.value = null;
    this.siguiente = null;
  }
  obtenerValue(){
    return this.value;
  }
}