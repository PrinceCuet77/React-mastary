# React Basics & Working With Components

## What are component?

- React is a Javascript library for building user interfaces.
- React makes building complex interactive and reactive user interfaces simpler.
- React is all about Components.
- Components are reusable building blocks in the user interface.

![](photo/how-is-a-component-built.png)

- Components are a combination of HTML code, CSS code for styling and Javascript code for logic.

![](photo/why-components.png)

## React code is written in a Declarative Way

- React uses a declarative approach for building the components.
- **Declarative Approach:** Define the desired target state(s) and let React figure out the actual Javascript DOM instructions.
- Create a react app -

```text
npx create-react-app my-app
cd my-app
npm install
```

- `index.js` is the first file to execute.
- JSX means JavaScript XML.
- A component in React is just a Javascript function which returns JSX code.
- **Component Convention:** Function name will be the file name.
- **Component Creation Convention:** All the components are kept in the `components/` directory.

```text
src/
  components/
    ExpenseItem.js
  App.js
  index.js
```

- `ExpenseItem.js` file -

```js
const ExpenseItem = () => {
  return <h2>Expense item</h2>
}

export default ExpenseItem
```

- `App.js` file -

```js
import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  )
}

export default App
```

- **CSS Convention:** `ExpenseItem.css` will be the filename of `ExpenseItem.js` file and the file should be contained in the `components/` directory.

```text
src/
  components/
    ExpenseItem.js
    ExpenseItem.css
  App.js
  Index.js
```

- Importing css file in the `ExpenseItem.js` file -

```js
import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

## Dynamic Data in the Component

- Dynamic Data showing inside the component -

```js
import './ExpenseItem.css'

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

## Passing Data via `props`

- Props are the attributes of my 'Custom HTML elements' (Components).
- Example of Passing Data via `Props` -

![](photo/passing-data-via-props.png)

- I can pass data to the custom component by adding an attribute.
- Inside that component, I can get access to all these attributes which might have been set on my custom component.
- This is called `props` instead of attributes which stands for properties.

![](photo/passing-data-via-props2.png)

- `props` is an object which holds all the received attributes as properties like key-value manner.

- So, making my component reusable and configurable by using the `props` concept.

- `App.js` file (passing static date from `App` component to `ExpenseItem` component) -

```js
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title='Toilet Paper'
        amount='94.12'
        date={new Date(2020, 7, 14)}
      ></ExpenseItem>
    </div>
  )
}

export default App
```

- `ExpenseItem.js` file -

```js
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

- But I can pass dynamic date from `App` component to `ExpenseItem` component -

```js
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].job}
      ></ExpenseItem>
    </div>
  )
}

export default App
```

- I am destructuring the `props` object while taking as a parameter -

```js
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

## Alternative Ways of Passing & Receiving / Handling `props`

- **Method 01:** `App.js` file, passing single `props` like `<ExpenseItem expense={expenses[0]}></ExpenseItem>` -

```js
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
    </div>
  )
}

export default App
```

- `ExpenseItem.js` file -

```js
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <div>{props.expense.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.expense.title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

- I can destructure the object like:

```js
const ExpenseItem = (props) => {
  const { title, date, amount } = props.expense

  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}
```

- If I pass `props` in `App.js` -

```js
function App() {
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].job}
      ></ExpenseItem>
    </div>
  )
}
```

- then,

```js
const ExpenseItem = ({ title, date, amount }) => {
  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}
```

- **Method: 02** `App.js` file, passing `props` like `<ExpenseItem {...expenses[0]}></ExpenseItem>`

```js
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem {...expenses[0]}></ExpenseItem>
      <ExpenseItem {...expenses[1]}></ExpenseItem>
    </div>
  )
}

export default App
```

- `ExpenseItem.js` file -

```js
import './ExpenseItem.css'

const ExpenseItem = ({ title, date, amount }) => {
  const month = date.toLocaleString('en-Us', { month: 'long' })
  const day = date.toLocaleString('en-Us', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

## Split Components into Multiple Components

- Good practice is keeping created multiple components
- Create as little component as possible

![](photo/build-a-component-tree.png)

- I can use a component like `<ExpenseItem></ExpenseItem>` or `<ExpenseItem/>`
- The file structure -

```text
src/
  components/
    ExpenseItem.js
    ExpenseItem.css
    ExpenseData.js
    ExpenseData.css
  App.js
  Index.js
```

- In `App.js` file -

```js
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
```

- In `Expense.js` file -

```js
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  return (
    <div className='expenses'>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </div>
  )
}

export default Expenses
```

- In `ExpenseItem.js` file -

```js
import ExpenseData from './ExpenseData'
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className='expense-item'>
      <ExpenseData date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
```

- In `ExpenseData.js` file -

```js
import './ExpenseData.css'

const ExpenseData = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpenseData
```

## The Concept of 'Composition' (`children` props)

- **Component composition:** building complex user interfaces by combining and nesting smaller, reusable components together.
- this approach allows developers to create modular, maintainable and scalable code.
- Each component focuses on a specific functionality or view and they can be composed togetherto form the complete UI.

- In `ExpenseItem.js` file -

```js
import ExpenseData from './ExpenseData'
import './ExpenseItem.css'
import Card from './Card'

const ExpenseItem = (props) => {
  const { title, date, amount } = props.expense

  return (
    <Card className='expense-item'>
      <ExpenseData date={date}></ExpenseData>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
```

- In `Card.js` file -

```js
import './Card.css'

const Card = (props) => {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card
```

- Note: A `children` is a special props which every component receives.
- Inside opening and closing component, everything is called `children`.

```js
<Card>...everthing inside that is called children</Card>
```

## A Closer Look At JSX

- An alternate way to write JSX code (but not recommended)

```js
import React from 'react'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started"),
    React.createElement(Expenses, { items: expenses })
  )
}

export default App
```

- Recommended way:

```js
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App
```

# React State & Working with Events

## Listening to Events & Working with Event Handlers

- React exposes all these default events as props which start with `on`.
- Inside the `onClick` event, I just point.

```js
<button onClick={clickHandler}>Change Title</button>
```

- Not executed (not recommended)

```js
// Don't do that
<button onClick={clickHandler()}>Change Title</button>
```

- In `ExpenseItem.js` file -

```js
import ExpenseData from './ExpenseData'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const { title, date, amount } = props.expense

  const clickHandler = () => {
    console.log('Clicked')
  }

  return (
    <Card className='expense-item'>
      <ExpenseData date={date}></ExpenseData>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
```

## Working with `State`

- `useState` is a funciton provided by the React library
- Importing as a named import
- Allows us to define values as `state` where changes to these values should reflect in the component function being called again
- This is the key difference to the regular variable
- `useState` is a React hook
- React hooks are recognized to see the word `use` at the beginning
- Hooks must only be called inside the React component
- `useState` wants a default state value
- Because based on that special kind of variable, the component will be called again
- `useState` returns an array
- First element of that is the variable itself
- Second element of that array is the updating function of that variable
- that second element not only update the value of this variable but also re-render the component
- The state is separated on a per component instance basis.

```js
import ExpenseData from './ExpenseData'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = (props) => {
  const { title, date, amount } = props.expense

  // useState
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
```

## Using One State Instead

- Instead of using multiple state like -

```js
export default ExpenseForm() => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmont] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    // Update multiple state
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmont(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  return <></>
}
```

- Use single state -

```js
export default ExpenseForm() => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (event) => {
    // Update single state
    setUserInput({ ...userInput, enteredTitle: event.target.value })
  }

  const amountChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredAmount: event.target.value })
  }

  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredDate: event.target.value })
  }

  return <></>
}
```

- Whenever I update state which depends on the previous state, it's recommended to use like the following -

```js
export default ExpenseForm() => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (event) => {
    // Recommended if there has a dependency of previous state
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  }

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
  }

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
  }

  return <></>
}
```

- Because React will ensure that `prevState` contains the latest update of `userInput` state
- That's why if I have a dependency of previous state, I need to use state like the previous style
- 