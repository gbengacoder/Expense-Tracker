import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const Movements = () => {
    const {transactions} = useContext(GlobalContext)

  return (
    <div>
        <h1 className='hist'>History</h1>
        <div className="line"></div>
        <div className="movements">
            {transactions.length < 1 && (
                <h2>NO Expenses</h2>
            )}
            {transactions.map(transaction => (
                <div className="movement" key={transaction.id}>
            <div className="item">{transaction.text}</div>
            <div className="price">{transaction.amount}$</div>
        </div>
            )) }
        </div>
    </div>
  )
}

export default Movements