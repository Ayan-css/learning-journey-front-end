const { log } = require("async")

function* numberGenerato() {
  yield 1
  yield 2
  yield 3

}
let gen = numberGenerato()

console.log(gen());
