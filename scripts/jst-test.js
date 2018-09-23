class testMethod {
    constructor(name){
        this.name = name
    }
}

let test = (name) => new testMethod(name)

export { test }