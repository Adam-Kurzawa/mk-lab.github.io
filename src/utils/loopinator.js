export class Loopinator {
    #array
    #currentIndex = 0

    constructor(array) {
        this.#array = array
    }

    getLength() {
        return this.#array.length
    }

    next() {
        let index = this.#currentIndex

        if(index === this.#array.length - 1)
            this.#currentIndex = 0
        else 
            this.#currentIndex += 1
        
        return this.#array[index]
    }

    getCurrentIndex() {
        return this.#currentIndex
    }
}