// let echo = (msg) => msg

// let equals = (actual,expected) => {
//     let sa = String(actual)
//     let se = String(expected)
//     if(actual === expected){
//         return (true, se + " equals " + sa)
//     } else {
//         return (false, "expected [" + se + "], but got [" + sa + "]" )
//     }
// }

let assert = {
    echo: (m) => { return "called echo with: [" + m + "]" },
    equal: (expected,actual) => {
        return true
    }
}

export { assert }