import {useState} from "react";

function Clicker({image}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          <img width="600" src={image} alt="click image"/>
        </button>
      </div>
      <div className="card">
        count is {count}
      </div>
    </div>
  )
}

export default Clicker

