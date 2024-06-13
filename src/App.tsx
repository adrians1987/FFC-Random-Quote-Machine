import { useState } from 'react'
import {FaQuoteLeft, FaQuoteRight, FaTwitter} from 'react-icons/fa'
import './App.css'
import quotes from './data/quotes.json'

interface Quote{
  quote: string; //interfaz quote
  author: string;
}

const getRandomQuote = (): Quote => { //retorno objeto quote
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote()); //de tipo Quote

  const changeQuote = () => {
    setQuote(getRandomQuote());
  }

  return (
    <div>
      <div className="mainWrapper">
        <div id="quote-box">
          <div className="quoteItems">
            <div style={{marginBottom: 10}}>
              <h2 id="text">
                <FaQuoteLeft id="quoteLeft" style={{marginRight: 10}} size={20} />
                  {quote.quote}
                <FaQuoteRight id="quoteRight" style={{marginLeft: 10}} size={20} />
              </h2>
            </div>
            <div>
              <h4 id="author">
                - {quote.author}
              </h4>
            </div>
          </div>
          <div className="buttonItems">
            <a id="tweet-quote" style={{backgroundColor: "lightskyblue"}}
            href={`https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${quote.quote}`}>
              <FaTwitter color="white" />
            </a>
            <button id="new-quote" onClick={changeQuote} style={{backgroundColor: "darkslateblue", marginLeft: 10}}>
              Change Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
