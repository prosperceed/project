import React, { Component } from 'react';
import Balance from './balance'
import ExpenseContent from './expenseContent'

class ExpenseTracker extends Component {
    state = { 
        amount: this.props.amount
     }
    render() { 
        return ( 
            <React.Fragment>
                <Balance onLoad ={this.props.handleBalance}/>
                <ExpenseContent />
            </React.Fragment>
         );
    }
}
 
export default ExpenseTracker;