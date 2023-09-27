// import { Component, connect } from 'react-redux';
import classes from './Counter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';

const Counter = () => {
  // const [isToggle, setIsToggle] = useState(true);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5})
  }

  const toggleCounterHandler = () => {
    // setIsToggle( prevState => !prevState );
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler () {
//     this.props.increment
//   }
//   decrementHandler () {
//     this.props.decrement
//   }

//   toggleCounterHandler () {}

//   render() {
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.connect
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return({
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   })
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
