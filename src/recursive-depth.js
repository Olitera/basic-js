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
  n=1;
  b = 1;
  c=0
  calculateDepth(arr) {
    
    
   arr.forEach((element, i)=> {
    let a= this.b
    if (Array.isArray(element)){
      this.b += 1
      this.n = this.n > this.b ? this.n : this.b;
      this.calculateDepth(element)
      // this.n = this.n > this.b ? this.n : this.b;
      // this.b-=1;
    } else {
      this.b = a;
    }
    
    // if (Array.isArray(element)) {
    //   this.calculateDepth(element)
      
    //   // this.b -= 1; 
    //  } else {
    //   this.n = this.n > this.b ? this.n : this.b;
    //  }
     if (i === arr.length - 1) {
      
      this.b = a - 1;
     }
     
   }
   );
  //  this.b-=1;
    // this.b=1; 
   return this.n;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  DepthCalculator
};
