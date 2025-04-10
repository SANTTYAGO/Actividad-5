class HashTable {
    constructor(size) {
        this.table = new Array(size)//creamos un array de tamaño size
        this.size = size // guardar el tamañop de la tabla hash para utilizarlo mas tarde
    }

    hash(key) {
        let total = 0
        for (let i = 0; key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)//calculamos el indice de la tabla hash

        this.table[index] = value // guardamos el valor en la posicion de indice
    }

    get(key) {
        const index = this.hash(key) // calculamos el indice de la tabla hash
        return this.table[index] // devolvemos el valor de la posicion de indice

    }


}

const table = new HashTable(10)

console.log(table)
console.log(table.hash)
console.log(table.set)
console.log(table.get)



