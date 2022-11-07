import { useState } from "react";
import axios from "axios";

function App() {
  const [linkText, setLinkText] = useState("");
  const addLink = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3010/api/link", {
        link: addLink,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <form onSubmit={(e) => addLink(e)}>
        <input
          type="text"
          placeholder="Add link"
          onChange={(e) => {
            setLinkText(e.target.value);
          }}
          value={linkText}
        ></input>
        <button type="submit">add</button>
      </form>
      <div>
        <div>
          <p>1deh link ajguu</p>
          <button>update</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
