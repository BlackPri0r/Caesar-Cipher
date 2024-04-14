import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card';
import Button from './Button';

function App() {

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");  //Use .split("") to turn the alphabet into an array
  const [text, setText] = useState("");
  const [encryptedText, setEncrypted] = useState("");
  const [cipherLevel, setLevel] = useState(0);

  useEffect(() => {
    setEncrypted(
      text.split("").map((x) => {
        const isUpperCase = x === x.toUpperCase();
        x = x.toLowerCase();
        if (!alphabet.includes(x)) return isUpperCase ? x.toUpperCase() : x;
        let newIndex = alphabet.indexOf(x) + cipherLevel;
        newIndex = (newIndex % 26 + 26) % 26;
        const encryptedChar = alphabet[newIndex];
        return isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
      }).join("")
    );
  }, [text, cipherLevel]);

  return (
    <>
      <div className="container">
        <div className="gapContainer">
          <div className="title">Caesar Cipher</div>

          
          <div className="top">
            <Card label="Input" value={text} setText={setText}></Card>
            <div className="svgContainer">
              <svg width="62" height="72" viewBox="0 0 62 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292889 7.29289C-0.0976349 7.68342 -0.0976349 8.31658 0.292889 8.70711L6.65685 15.0711C7.04737 15.4616 7.68054 15.4616 8.07106 15.0711C8.46159 14.6805 8.46159 14.0474 8.07106 13.6569L2.41421 8L8.07106 2.34315C8.46159 1.95262 8.46159 1.31946 8.07106 0.928932C7.68054 0.538408 7.04737 0.538408 6.65685 0.928932L0.292889 7.29289ZM61 7L0.999996 7V9L61 9V7Z" fill="white"/>
                <path d="M61.7071 64.7071C62.0976 64.3166 62.0976 63.6834 61.7071 63.2929L55.3431 56.9289C54.9526 56.5384 54.3195 56.5384 53.9289 56.9289C53.5384 57.3195 53.5384 57.9526 53.9289 58.3431L59.5858 64L53.9289 69.6569C53.5384 70.0474 53.5384 70.6805 53.9289 71.0711C54.3195 71.4616 54.9526 71.4616 55.3431 71.0711L61.7071 64.7071ZM1 65L61 65L61 63L1 63L1 65Z" fill="white"/>
              </svg>
              </div>
            <Card label="Encrypted" value={encryptedText}></Card>
          </div>


          <div className="bottom">
            <Button label="-" label2="Decrement" onClick={()=> setLevel(cipherLevel - 1)}></Button>
            <div>
              <div>
                Level
                <div className="cipherLevel">{cipherLevel}</div>
              </div>
            </div>
            <Button label="+" label2="Increment" onClick={()=> setLevel(cipherLevel + 1)}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
