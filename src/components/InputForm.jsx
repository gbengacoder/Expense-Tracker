import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const InputForm = () => {
  
  const [text, setText] = useState("");

  const [amount, setAmount] = useState(0);

  const [option , setOption] = useState()

  const [error , setError] = useState(false)
  
  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if(!option){
      setError('Option Needed')
      return;
    }

    if(!text || !amount){
      setError('All inputs Needed')
      return
    }

    setError(false)
    
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: option === 'income' ? +amount :Number( `${-amount}`),
    };
     
    console.log(newTransaction)
  
    addTransaction(newTransaction);

    setAmount('')
    setText('')
    setOption('Enter ')
  };

  const getSelectedValue = (e) =>{
   setOption(e.target.value)
   setError(false)
   console.log(option)
  }

  return (
    <div>
      <div className="line"></div>
      <form onSubmit={submitHandler}>
        {error && <p className="error">{error}</p>}
        <select name="" id="" onChange={getSelectedValue}>
        <option  selected  disabled>Choose one</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text" value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="enter item..."
        />
        <input value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="amount"
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputForm;
