class GrafoLista {
    constructor() {
        // Inicializa un objeto vacío para almacenar el grafo
        this.grafo = {};
    }

    agregarVertice(vertice) {
        // Añade un vértice al grafo si no existe ya
        if (!this.grafo[vertice]) {
            this.grafo[vertice] = [];
        }
    }

    agregarArista(inicio, fin) {
        // Añade una arista entre dos vértices
        if (!this.grafo[inicio]) {
            this.grafo[inicio] = [];
        }
        // Añade el vértice de fin a la lista de adyacencia del vértice de inicio
        this.grafo[inicio].push(fin);
    }

    imprimirLista() {
        // Imprime la lista de adyacencia en la consola
        for (const vertice in this.grafo) {
            console.log(`${vertice} -> ${this.grafo[vertice].join(', ')}`);
        }
    }
}

// Crear el grafo con los vértices especificados
const list = new GrafoLista();
['A', 'B', 'C', 'D', 'E'].forEach(vertice => list.agregarVertice(vertice));
list.agregarArista('A', 'B');
list.agregarArista('A', 'C');
list.agregarArista('B', 'D');
list.agregarArista('C', 'D');
list.agregarArista('D', 'E');

// Imprimir la lista de adyacencia
list.imprimirLista();
