import React from 'react'

const Calculation = () => {
    const number1 : number = 10;
    const number2 : number = 10;

    const plus = (a:number, b:number): number => a + b;
    const subtract = (a:number, b:number): number => a - b;
    const multiple = (a:number, b:number): number => a * b;
    const divide = (a:number, b:number): number => (b != 0 ? a/b : NaN);
  return (
    <div>
      <h3>Danh sach ket qua</h3>
      <ul>
        <li>{number1} + {number2} = {plus(number1, number2)}</li>
        <li>{number1} - {number2} = {subtract(number1, number2)}</li>
        <li>{number1} * {number2} = {multiple(number1, number2)}</li>
        <li>{number1} / {number2} = {divide(number1, number2)}</li>
      </ul>
    </div>
  );
}

export default Calculation
