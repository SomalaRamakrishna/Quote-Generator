import { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState('');
  const [quoteDisplay,setQuoteDisplay]=useState(false);
  const [isloading,setLoading]=useState(false);

  const handleGetQuote = async() => {
    setLoading(quoteDisplay?false:true);
    try{
    const response=await axios.get('http://localhost:5000/api/generate-quotate',{
      params:{mood:mood}
    });
    const data=response.data;
    console.log(response.data);
    setLoading(false);
    setQuote(data);
    setQuoteDisplay(!quoteDisplay);
    }
    catch(err){
      setLoading(false);
    }
  }
  return (
    <div className="mood-container">
      <div className="mood-card">
        <h2 className="mood-title">How are you feeling today?</h2>
        <input
          type="text"
          className="mood-input"
          placeholder="Enter your mood (e.g., happy, sad) "
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <button className="mood-button" onClick={handleGetQuote}>
          {quoteDisplay?"Hide Quote":"Get Quote"}
        </button>

        {isloading ?<h4>Quote Loading..</h4>:<>{quote && quoteDisplay && <p className="mood-quote">{quote}</p>}</>}
      </div>
    </div>
  );
};

export default App
