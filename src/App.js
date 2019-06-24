import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/actions";
import { decrement } from "./store/actions";

function App() {
  //const store = this.props.store;
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter {counter} </h1>
      <button onClick={() => dispatch(increment(5))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>

      {isLogged ? <h3> secret Info i shouldnt see </h3> : <h3>please login</h3>}
      <Posts />
    </div>
  );
}

export default App;
