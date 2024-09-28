import './App.css'
import Clicker from './Clicker';
import {useState} from "react";

function App() {
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div>
      {image && show ? (
        <Clicker image={image}/>
      ) : (
        <div>
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" onChange={(event) => {
            setImage(event.target.value);
          }}/>
        </div>
      )}

      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App
