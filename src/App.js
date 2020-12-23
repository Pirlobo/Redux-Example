import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions/index.js';
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
       {/* click the button then dispatch the action named increment which is a callback */}
      <button onClick={() => dispatch(increment(2))}>+</button>
      {isLogged ? <h3>I logged in</h3> : <h3> Nothing is rendered </h3>}
    </div>
  );
}

export default App;
