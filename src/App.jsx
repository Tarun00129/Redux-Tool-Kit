import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { increment, dcrement, resetCount, changesByAction } from './features/counters/counter-slice'
function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  function heandleIncrement() {
    dispatch(increment())
  }
  function heandleDecrement() {
    dispatch(dcrement())
  }
  function heandleReset() {
    dispatch(resetCount())
  }
  function heandleByAmount() {
    dispatch(changesByAction(amount))
  }

  return (
    <div className='container'>
      <Button onClick={heandleIncrement} variant='contained'> + </Button>
      <p> Count:- {count} </p>
      <div className='d-flex'>
        <Button onClick={heandleDecrement} variant='outlined'> - </Button>&nbsp; &nbsp; &nbsp;&nbsp;
        <Button onClick={heandleReset} variant='contained'> Reset </Button>
      </div>

      <br />
      <input type='number' value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
      <br />
      <br />
      <button onClick={heandleByAmount}>Inc By Amount</button>
    </div>
  )
}

export default App
