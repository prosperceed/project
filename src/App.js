import React, { useState, useEffect } from 'react';
import ExpenseContent from './components/expenseContent';
import './App.css';
import Balance from './components/balance';

import {uniqueId} from './components/uniqueId';

  const App = () => {

    const transactionData = [

      // {item: 'House rent', value: 100, id: uniqueId(), type: 'expense', time: getDate()}


    ];


    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState(transactionData);


    const saveTransactions = (data) =>{
      const store = localStorage.setItem('Transactions', JSON.stringify(transactionData));
      setTransactions(store)
    }


    const transactionType = () => {
      let income = 0, expense = 0;

      transactions.forEach((data) => {
        if (data.type === 'income'){
          income += data.value;
        } else if(data.type === 'expense'){
          expense += data.value;
        }

        setIncome(income);
        setExpense(expense);
      });
        
    }

    const handleDelete = (itemId) => {
      const deleteTransaction = transactions.filter(item => item.id !== itemId);
      setTransactions(deleteTransaction);
    }

    const handleAddTransaction = item => {
      let newTransactions = [...transactions, item]
      setTransactions(newTransactions);
    }

    const date = () => {
      const today = new Date().toISOString().slice(0, 10);
      setTransactions(today)
      console.log(today)
      
    }

    // const sign = transactionData.tpe === 'income' ? '+' : '-';

    useEffect(() => {
      transactionType();
    }, [transactions]);
    

    useEffect(() => {
      transactionType()
    }, [transactions]);
    

    return ( 
    <React.Fragment>
        <Balance balance = {income-expense} />
      <ExpenseContent income = {income} expense = {expense} transactions = {transactions} 
                      onAddTransaction = {handleAddTransaction} onDelete={handleDelete} date={date}/>
      </React.Fragment>
    );
}

 export default App;