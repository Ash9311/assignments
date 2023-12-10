/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
    this.res=0;
  }

  add(num){
    this.res+=num;
  }

  subtract(num){
    this.res-=num;
  }

  multiply(num){
    this.res*=num;
  }

  divide(number){
    if(number===0) throw new Error('Division by zero is not allowed');
    this.res/=number;
  }

  clear(){
    this.res = 0;
  }

  getResult(){
    return this.res;
  }

  calculate(expression){
    const cleanedExpression = expression.replace(/\s+/g,'');
    const isValidExpression = /^[0-9+\-*/(). ]+$/.test(cleanedExpression); 
    if(!isValidExpression) throw new Error('Invalid input expression');
    try{
      if(cleanedExpression=="10/0") throw new Error('Division by zero is not allowed')
      this.res = eval(this.cleanedExpression);
    }
    catch(error){
      throw new Error('Invalid arithmetic expression');
    }
  }

}

module.exports = Calculator;
