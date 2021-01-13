import React from 'react';

const Balance = ({balance}) => {
    
    return ( 
        <>
        <div className="balance-container text-right mr-5 pr-5">
        <h3 className="balance-header">Total Balance: ${balance} </h3>
        </div>
        </>
   );
}


export default Balance;