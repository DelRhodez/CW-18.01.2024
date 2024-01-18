import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState ([]);
  const [loading, setLoading] = useState (false);
  const [error, setError] = useState ('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .finally(() => setLoading(false))
    .then (response => response.json())
    .then (setUsers) 
    // .then (users => setUsers(users)) та же строчка, что и выше
    .catch(error => setError(error.toString()))
  }, [])

  return (
    <div className="App">
      {
      loading ? <h1>Loading</h1> :
        error ? <p>Error: { error }</p> :
        users.map(users =>(<>
        <h5>{users.name}</h5>
        <p>{users.email}</p>
        </>))}
    </div>
  );
}

export default App;
