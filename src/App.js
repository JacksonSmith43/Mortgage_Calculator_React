import { useEffect, useRef, useState } from 'react';
import './App.css';


function Input() {

  const loanAmountRef = useRef(null);
  const anualInterestRateRef = useRef(null);
  const totalPaymentsRef = useRef(null);
  const calculationButton = useRef(null);


  const handleInputClick = () => {

    console.log('loanAmountRef.current.value:', loanAmountRef.current.value);
    console.log('anualInterestRateRef.current.value:', anualInterestRateRef.current.value);
    console.log('totalPaymentsRef.current.value:', totalPaymentsRef.current.value);
    
    const totalPaymentsMonthly = totalPaymentsRef.current.value * 12;
    console.log("totalPaymentsMonthly:", totalPaymentsMonthly);

    const monthlyInterestRate = (anualInterestRateRef.current.value / 100) / 12;
    const calculatesMortgageMonthly = loanAmountRef.current.value * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPaymentsMonthly)) / (Math.pow(1 + monthlyInterestRate, totalPaymentsMonthly) - 1));

    console.log("monthlyInterestRate:", monthlyInterestRate);
    console.log("calculatesMortgageMonthly:", calculatesMortgageMonthly);

  }



  return (
    <>
      <label htmlFor="loan-amount">Loan amount:</label>
      <input ref={loanAmountRef} id='loan-amount' type='number'></input>

      <label htmlFor="interest-rate">Interest rate:</label>
      <input ref={anualInterestRateRef} id='interest-rate' type='number'></input>

      <label htmlFor="loan-length">Loan length:</label>
      <input ref={totalPaymentsRef} id='loan-length' type='number'></input>

      <button ref={calculationButton} onClick={handleInputClick}>Calculate</button>
    </>
  );


}




function App() {

  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
