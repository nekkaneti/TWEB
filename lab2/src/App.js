import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const OnClick = () => { toast("Success"); console.log("button clicked") }
  return (
    <div className="App">
      <p>
        Neer Ecaterina CR-203
      </p>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <form style={{ display: "flex", flexDirection: "column", width: 150, marginBottom: 10 }}>
        <label>Login</label><input></input>
        <label>Mail</label><input></input>
        <label>Password</label><input></input>
      </form>
      <button onClick={OnClick}>Submit</button>
      <ToastContainer />
    </div>
  );
}

export default App;
