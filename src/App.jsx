import { useState } from "react";
import "./App.css";
import BtnCookie from "./components/BtnCookie";
import Cookie from "./components/Cookie";
import phrases from "./utils/phrases.json";
import elementRandom from "./function/getElemArrayRandom";
import imagenes from "./utils/image.json";

function App() {
  const randomPhrases = elementRandom(phrases);
  const randomBgColor = elementRandom(imagenes);

  const [quote, setQuote] = useState(randomPhrases);
  const [bgColor, setBgColor] = useState(randomBgColor);

  const [image] = useState(imagenes);
  const filterImage = image.filter((filt) => filt === bgColor);

  const bgStyle = {
    backgroundImage: `url(${filterImage[0].image})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <div className="App" style={bgStyle}>
      <Cookie quote={quote} image={image} />
      <BtnCookie
        setQuote={setQuote}
        phrases={phrases}
        setBgColor={setBgColor}
        imagenes={imagenes}
      />
    </div>
  );
}

export default App;
