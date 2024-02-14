class TenthAndOffer {
    static #tenth = 0.1
    static #offer = 0.05

    static monthTenth(value) {
        return value*this.#tenth
    }

    static monthOffer(value){
        return value*this.#offer
    }

    static netPay(salary){
        return salary - this.monthTenth(salary) - this.monthOffer(salary)
    }
    
}

module.exports = TenthAndOffer