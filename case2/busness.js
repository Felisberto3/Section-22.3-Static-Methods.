class Busness {
    #profit
    static #fun = 333333333333
    constructor({ profit }){
        this.#profit = profit
    }  
    // Como acessar uma variável não static numa função static
    static showProfit() {
        return new Busness({profit: 1000}).#profit
    }

    greating() {
        return `hello ${Busness.#fun}`
    }
}

module.exports = Busness