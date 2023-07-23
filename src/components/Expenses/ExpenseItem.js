import ExpenseData from './ExpenseData'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = ({ title, amount, date }) => {

  const [myTitle, setMyTitle] = useState(title)

  const clickHandler = () => {
    setMyTitle('Another title')
  }

  return (
    <Card className='expense-item'>
      <ExpenseData date={date}></ExpenseData>
      <div className='expense-item__description'>
        <h2>{myTitle}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
