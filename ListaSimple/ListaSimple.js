import { Nodo } from "./Nodo.js";
export class ListaSimple {
  primero;
  ultimo;
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }
  addNodo(data) {
    let nuevo = new Nodo();
    nuevo.value = data;
    if (this.primero === null) {
      this.primero = nuevo;
      this.ultimo = nuevo;
    } else {
      this.ultimo.siguiente = nuevo;
      this.ultimo = nuevo;
    }
  }
  inicioFin() {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.siguiente;
    }
  }
  buscarNodo(data) {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value === data) {
        return console.log("El nodo ha sido encontrado");
      }
      pivo = pivo.siguiente;
    }
    return console.log("No se encontró el nodo");
  }
  eliminarNodo(data) {
    let pivo = new Nodo();
    let pivoAntes = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value === data) {
        // eliminar
        if (pivo === this.primero) {
          this.primero = pivo.siguiente;
          return console.log("Nodo eliminado");
        }
        pivoAntes.siguiente = pivo.siguiente;
        return console.log("Nodo eliminado");
      }
      pivoAntes = pivo;
      pivo = pivo.siguiente;
    }
    return console.log("No se encontró el nodo");
  }
}
