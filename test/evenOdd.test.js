const evenOddGenerator = require('../evenOddGenerator');
describe('should return an object with properties even and odd, one should be an array of even numbers and the other should be an array of odd numbers', () => {
  const outputFive = evenOddGenerator([2, 'a'])
  
  it('should return an array of even numbers when an array of even numbers is passed', () => {
    const output = evenOddGenerator([2, 4]);
    output.even.map(even => expect(even % 2).toBe(0));
  });
  
  it('should return an array of even numbers when an array of even numbers including parsable strings are passed', () => {
    const output = evenOddGenerator([2, '4']);
    output.even.map(even => expect(even % 2).toBe(0));
  });
  
  it('should return an array of even numbers when an array of even numbers including parsable strings are passed', () => {
    const output = evenOddGenerator([2, '4']);
    const outputTwo = evenOddGenerator([2, 'a']);
    output.even.map(even => expect(even % 2).toBe(0));
    outputTwo.even.map(even => expect(even % 2).toBe(0));
  });
  
  
  it('should return an array of even and odd numbers when a number is passed as an argument', () => {
      const output= evenOddGenerator(100);
    output.even.map(even => expect(even % 2).toBe(0));
    output.odd.map(odd => expect(odd % 2 !== 0).toBe(true))
  });
  
  it('should return an array of even and odd numbers when a parsable string is passed as an argument', () => {
      const output= evenOddGenerator('100');
    output.even.map(even => expect(even % 2).toBe(0));
    output.odd.map(odd => expect(odd % 2 !== 0).toBe(true))
  });
  
  it('should return an array of odd numbers when a parsable string is passed as an argument, whoose factors are only odd numbers', () => {
    const output= evenOddGenerator('1');
    output.odd.map(odd => expect(odd % 2 !== 0).toBe(true))
  });
  
  
  it('should return an error if the argument is netheir a number, parsable string, nor an array', () => {
    const output = evenOddGenerator('aa')
    output.error ? expect(output.error).toEqual('Please pass in either a number or an array') : expect(output.error).toEqual('');
  })
  
});