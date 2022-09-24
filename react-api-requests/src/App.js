import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  // POST, GET, PUT or PATCH, DELETE

  // --- PUT request (updating data)
  const updateData = (id) => {
    axios
      .put(`https://63148342fa82b738f7490b20.mockapi.io/users/${id}`, {
        name: name,
        age: 43,
        hobbies: ['guitar', 'sport', 'coding', 'reading'],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  // --- POST request
  const postData = () => {
    axios
      .post('https://63148342fa82b738f7490b20.mockapi.io/users', {
        name: name,
        age: 43,
        hobbies: ['guitar', 'sport', 'coding'],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // --- GET request
  useEffect(() => {
    axios
      .get('https://63148342fa82b738f7490b20.mockapi.io/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // --- Delete request (updating data)
  const deleteData = (id) => {
    axios
      .delete(`https://63148342fa82b738f7490b20.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  return (
    <div className="App">
      <input placeholder="name" type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={postData}>POST data</button>
      {users.map((user) => {
        return (
          <>
            <h3>{`${user.id}.${user.name}`}</h3>
            <button onClick={() => updateData(user.id)}>Update</button>
            <button onClick={() => deleteData(user.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
}

export default App;
