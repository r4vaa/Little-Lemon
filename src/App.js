
import { useEffect, useState } from 'react';
import './App.css';

function App() {
   const [date, setDate] = useState(new Date())

   useEffect(() => {
      setInterval(() => setDate(new Date()), 1000)
   })
   return (
      <div className="App">
         <h1>{date.toLocaleTimeString()}</h1>
      </div>
   );
}

export default App;
