import { useState, useEffect } from "react";

const URL = "https://api.themotivate365.com/stoic-quote"

function App() {
  const [quote_data, setQuote]  = useState('');
  const fetchQuote = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setQuote(data))
    .catch(err => console.error(err));
  }
useEffect(() => {
 fetchQuote();
}, []);
  return (
    <div>
    <h1>Press refresh button to get random stoic quote</h1>
    <button onClick={fetchQuote}>refresh</button>
    <div className="card">
      <p className="quote_text">
        "{quote_data.quote}"
      </p>
      <p className="author">- {quote_data.author}</p>
    </div>
    
    </div>
  );
}

export default App;
