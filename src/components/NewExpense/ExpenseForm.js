import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value)
  // }

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value)
  // }

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value)
  // }

  // For multiple state, I can use one single function instead of using multiple functions per state
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value)
    } else if (identifier === 'amount') {
      setEnteredAmount(value)
    } else if (identifier === 'date') {
      setEnteredDate(value)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      data: enteredDate,
      amount: enteredAmount,
    }

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form className='new-expense__controls' onSubmit={submitHandler}>
      <div className='new-expense__control'>
        <label>Title</label>
        <input
          type='text'
          value={enteredTitle}
          onChange={(event) => inputChangeHandler('title', event.target.value)}
        />
      </div>
      <div className='new-expense__control'>
        <label htmlFor=''>Amount</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          value={enteredAmount}
          onChange={(event) => inputChangeHandler('amount', event.target.value)}
        />
      </div>
      <div className='new-expense__control'>
        <label htmlFor=''>Date</label>
        <input
          type='date'
          min='2018-01-01'
          max='2022-12-31'
          value={enteredDate}
          onChange={(event) => inputChangeHandler('date', event.target.value)}
        />
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
