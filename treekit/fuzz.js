const treekit = require("tree-kit");
module.exports.fuzzFn = function(data) {
    try {
 treekit.extend({ unflat: true }, {}, JSON.parse(data.toString()));
    } catch(e){}
}
