const TenthAndOffer = require("./tenthAndOffer")

class ChurchMember {
    #name
    #job
    #salary

    constructor({ name, job, salary }){
        this.#name = name
        this.#job = job
        this.#salary = salary
    }

    get tenth() {
        return TenthAndOffer.monthTenth(this.#salary)
    }

    get offer(){
        return TenthAndOffer.monthOffer(this.#salary)
    }

    get grossPay(){
        return this.#salary
    }

    get netPay() {
        return TenthAndOffer.netPay(this.#salary)
    }

    
}

const Felimua = new ChurchMember({
    name:'Felis',
    job:"Bate bloco",
    salary: 20000
});


console.log("relatorio=>",Felimua.grossPay)
console.log("relatorio=>",Felimua.tenth)
console.log("relatorio=>",Felimua.offer)
console.log("relatorio=>",Felimua.netPay)
