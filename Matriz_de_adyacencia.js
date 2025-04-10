class GrafoMatriz {
    constructor(vertices) {
        // Inicializa la lista de vértices y crea una matriz de adyacencia con ceros
        this.vertices = vertices;
        this.matriz = Array.from({ length: vertices.length }, () => Array(vertices.length).fill(0));
    }

    agregarArista(inicio, fin) {
        // Encuentra los índices de los vértices en la lista
        const i = this.vertices.indexOf(inicio);
        const j = this.vertices.indexOf(fin);
        // Establece el valor correspondiente en la matriz a 1 para indicar una arista en ambas direcciones
        this.matriz[i][j] = 1;
        this.matriz[j][i] = 1; // Agrega la arista en la dirección opuesta
    }

    imprimirMatriz() {
        // Imprime la matriz de adyacencia en la consola
        console.log(this.matriz);
    }
}

// Crear el grafo con los vértices especificados
const vertices = ['A', 'B', 'C', 'D', 'E'];
const grafoMatriz = new GrafoMatriz(vertices);
grafoMatriz.agregarArista('A', 'B');
grafoMatriz.agregarArista('A', 'C');
grafoMatriz.agregarArista('B', 'D');
grafoMatriz.agregarArista('C', 'D');
grafoMatriz.agregarArista('D', 'E');

// Imprimir la matriz de adyacencia
grafoMatriz.imprimirMatriz();
