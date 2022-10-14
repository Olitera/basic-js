const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  maxDepth = 1;
  curMaxDepth = 1;
  curDepth = 0;


  calculateDepth(arr) {
    this.curDepth += 1;
    arr.forEach((element, i) => {
      if (Array.isArray(element)) {
        this.curMaxDepth += 1;
        this.maxDepth = this.maxDepth > this.curMaxDepth ? this.maxDepth : this.curMaxDepth;
        this.calculateDepth(element)
      }
      //  else {
      //   this.curMaxDepth = this.curDepth;
      // }
      if (i === arr.length - 1) {
        this.curMaxDepth = this.curDepth - 1;
      }
    });
    this.curDepth -= 1;
    
    const result = this.maxDepth;
    if (this.curDepth === 0) {
      this.maxDepth = 1;
      this.curMaxDepth = 1;
    }
    return result;
  }
}
module.exports = {
  DepthCalculator
};
