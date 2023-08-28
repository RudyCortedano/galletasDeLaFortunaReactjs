import React from "react";
import elementRandom from "../function/getElemArrayRandom";

const BtnCookie = ({ setQuote, phrases, setBgColor, imagenes  }) => {
  const changePhrase = () => {
    setQuote(elementRandom(phrases));
    setBgColor(elementRandom(imagenes))
  };
  return (
    <div className="box__btn">
      <button className="btn__change" onClick={changePhrase}><i className="fa-solid fa-shuffle"></i></button>
    </div>
  );
};

export default BtnCookie;
