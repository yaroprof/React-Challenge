import { useState } from 'react';
import './App.css';

function App() {
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    const data = { [name]: value };
    setObjData({ ...objData, ...data });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(objData);
  };

  return (
    <form onSubmit={submit}>
      <div className="form">
        <input
          placeholder="Write your name"
          name="name"
          type="text"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />

        <input
          placeholder="Write your age"
          name="age"
          type="number"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />

        <input
          placeholder="Write your hobbies"
          name="date"
          type="text"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />

        <input
          placeholder="Write a Date"
          name="date"
          type="date"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />

        <input
          placeholder="Input date"
          name="date"
          type="file"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default App;
