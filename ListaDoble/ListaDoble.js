import { Nodo } from "./Nodo.js";
export class ListaDoble {
  primero;
  ultimo;
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }
  agregarNodo(value) {
    let nuevo = new Nodo();
    nuevo.value = value;

    if (this.primero === null) {
      this.primero = nuevo;
      this.ultimo = nuevo;
    } else {
      this.ultimo.siguiente = nuevo;
      nuevo.anterior = this.ultimo;
      this.ultimo = nuevo;
    }
  }
  // ver los valores de los nodos en ambas direcciones
  inicioFin() {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.siguiente;
    }
  }
  finInicio() {
    let pivo = new Nodo();
    pivo = this.ultimo;
    while (pivo != null) {
      console.log(pivo.value);
      pivo = pivo.anterior;
    }
  }

  // buscar nodo
  buscarNodo(value) {
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (pivo.value === value) {
        return console.log("El nodo a sido encontrado");
      }
      pivo = pivo.siguiente;
    }
    return console.log("No se encontró el nodo");
  }
  // eliminar nodo
  eliminarNodo(value) {
    let check = false;
    let pivo = new Nodo();
    pivo = this.primero;
    while (pivo != null) {
      if (JSON.stringify(pivo.value) == JSON.stringify(value)) {
        check = true;
        if (pivo === this.primero && pivo === this.ultimo) {
          this.primero = this.ultimo = null;
          break;
        }
        if (pivo === this.primero) {
          this.primero = pivo.siguiente;
          this.primero.anterior = null;
          break;
        }
        if (pivo === this.ultimo) {
          this.ultimo = pivo.anterior;
          this.ultimo.siguiente = null;
          break;
        }
        pivo.siguiente.anterior = pivo.anterior;
        pivo.anterior.siguiente = pivo.siguiente;
      }
      pivo = pivo.siguiente;
    }
    return check
      ? console.log("Nodo eliminado")
      : console.log("El nodo no ha sido encontrado");
  }
  // vaciar lista
  vaciarLista() {
    this.primero = this.ultimo = null;
  }
}
