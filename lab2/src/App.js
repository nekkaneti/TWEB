import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[toast, settoast]=useState();
  const onClick = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
  });
    // console.log("Button Pressed");
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Neer Ecaterina CR-203
        </a>
        <form style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <label>Login</label>
          <input></input>
          <label>Mail</label>
          <input></input>
          <label>Password</label>
          <input></input>
        </form>
        <button onClick={onClick}>Submit</button>
        {/* <ToastContainer/> */}
      </header>
    </div>
  );
}

export default App;
