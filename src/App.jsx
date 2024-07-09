import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import patternDividerDesktop from "./images/pattern-divider-desktop.svg";
import diceIcon from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState(``);
  const [id, setId] = useState(``);
  const [clicked, setClicked] = useState(1);

  const handleClick = () => {
    setClicked(clicked + 1);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`https://api.adviceslip.com/advice`);
      setAdvice(`"${res.data.slip.advice}"`);
      setId(res.data.slip.id);
    };
    fetch();
  }, [clicked]);

  return (
    <div className="min-h-screen bg-dark-blue flex justify-center items-center">
      <div className="relative bg-dark-grayish-blue font-manrope text-center rounded-xl shadow-xl max-w-[500px] m-5">
        <div className="p-10">
          <h4 className="uppercase text-neon-green font-bold text-xs tracking-[3px] mb-4">
            Advice #{id}
          </h4>
          <h1 className="text-white font-black text-2xl">{advice}</h1>
        </div>
        <div className="flex justify-center items-center mb-20 max-w-full px-10">
          <img src={patternDividerDesktop} />
        </div>
        <div className="flex justify-center">
          <button className="absolute -bottom-7" onClick={handleClick}>
            <div className="h-14 w-14 bg-neon-green rounded-full flex justify-center items-center">
              <img src={diceIcon} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
