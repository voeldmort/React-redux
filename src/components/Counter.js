import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

// useSelector and useState are the hooks used to get the access of the store


const Counter = () => {
  const dispatch= useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  //When you use useSelector , Redux automatically set the subdcribe the component

  const incrementHandler = () => { 
    // dispatch({ type: 'increment' }); //For old implementation
    dispatch(counterActions.increment()); //For new implementation using redux-toolkit
  };
  const increaeHandler = () => {
    // dispatch({type: 'increase', amount: 5}); for old implementation
    dispatch(counterActions.increse(5)); //For new implementation using redux-toolkit
    // {type: SOME_UNIQUE_IDENTIFIER, payload:10}
  }
  const decrementHandler = () => {
    // dispatch({type: 'decrement'}); for old implementation
    dispatch(counterActions.decrement()); //For new implementation using redux-toolkit
   };

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'}); for old implementation
    dispatch(counterActions.toggleCounter()); //For new implementation using redux-toolkit
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaeHandler} >Increase by 5</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
