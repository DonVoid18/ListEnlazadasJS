import { ListaDoble } from "./ListaDoble.js";
let lista = new ListaDoble();
lista.agregarNodo(2);
lista.agregarNodo(true);
lista.agregarNodo({ name: "patrick " });
lista.agregarNodo("reoijo");

console.log("Inicio - Fin");
lista.inicioFin();-

console.log("Fin - Inicio");
lista.finInicio();

console.log("Buscar nodo");
lista.buscarNodo(2);

// eliminar nodo
console.log("Eliminar nodo")
lista.eliminarNodo("reoijo")
lista.eliminarNodo({ name: "patrick " })


console.log("Fin - Inicio");
lista.finInicio();

// vaciar la lista
console.log("Vaciando lista")
lista.vaciarLista()

console.log("Fin - Inicio");
lista.finInicio();