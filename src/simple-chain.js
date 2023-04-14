const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],


  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === 0) {
      this.chain.push(`0`);
    } else if (value === null ) {
      this.chain.push(`null`);
    } else if (isNaN(value) && !value) {
      this.chain.push(`NaN`);
     } else if (value === false) {
        this.chain.push(`false`);
    }else if(!value) {
      this.chain.push(``);
    }else {
    this.chain.push(value.toString());
    }
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain =[];
      throw new Error("You can't remove incorrect link!");
    }  else if (position > this.chain.length || position <= 0) {
      this.chain =[];
      throw new Error("You can't remove incorrect link!");

    } else {
    this.chain.splice(position - 1, 1);
    }
    return this;
    // remove line with error and write your code here
  }, 
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.chain.map(el => `( ${el.toString()} )`).join('~~'); 
    this.chain = [];
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
