import React, { useState, useEffect } from 'react';
import {uniqueId} from './uniqueId';

  const ExpenseContent = ({income, expense,transactions, onAddTransaction, onDelete, date}) =>{

    const [item, setItem] = useState('');
    const [value, setValue] = useState('');

    const newTransaction =(type, event) => {
      event.preventDefault();

     const data = {item: item, value: parseInt(value), id: uniqueId(), type: type}
     onAddTransaction(data)

     setItem('');
     setValue('');
    }


    return (
      
        <>
        <div className="expense align-content-center pb-5">
    <span className="income">Income<ol className="badge badge-pills badge-primary">${income}</ol></span>
    <span className="Outcome">Expense<ol className="badge badge-pills badge-danger">${expense}</ol></span>
        </div>
        <div className="add-list">
            <form>
                <label>Add Item</label>
                <div className="form-group">
                  <input type="text" className="form-control" value={item} onChange={(e) => setItem(e.target.value)} />
                </div>
                <label>Enter Amount</label>
                <div className="form-group">
                  <input type="number" className="form-control" value={value} onChange={(e) => setValue(e.target.value)}/>
                  <div className="buttons m-3">
                  <input  className="btn btn-primary mr-3" type="submit"  value="Add Income" onClick={(e) => newTransaction('income', e)}/>
                  <input  className="btn btn-warning ml-3" type="submit"  value="Add Expense" onClick={(e) => newTransaction('expense', e)}/>
                  </div>
                </div>
            </form>
              <hr />
              <div className="list">
                <h2 className="text-dark mb-5">Transaction History</h2>
                <ul>
                {transactions.map(data => <li key={data.id }>{date}  {data.item}  ${data.value} <button  className="btn btn-danger btn-sm" onClick={() => onDelete(data.id)}>X</button></li>)}
              </ul>
              </div>
        </div>
        </>
     );

}

export default  ExpenseContent;