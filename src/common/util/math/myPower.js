const myCube = require('./myCube.js');
const mySquare = require('./mySquare.js');

module.exports = {
    // NOTE ilker putting JSDoc 3 tags
    /**
     * @return String of inpNumber
     */
    toCube: function(inpNumber) {
        return myCube.toCube(inpNumber);
    },
    toSquare: function(inpNumber) {
        return mySquare.toSquare(inpNumber);
    }
}