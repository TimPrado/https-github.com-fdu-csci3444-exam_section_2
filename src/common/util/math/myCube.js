module.exports = {
    // NOTE ilker putting JSDoc 3 tags
    /**
     * @return String of inpNumber
     */
    toCube: function(inpNumber) {
        var inpNum = NaN; // means inpNumber is not a number nor can be parsed to number
        if (typeof inpNumber === "number") {
            inpNum = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            inpNum = Number(inpNumber);
        }
        return inpNum * inpNum * inpNum;
    }
}