"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [buttonStyle, setButtonStyle] = useState({});
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleAnswerNo = () => {
    if (btnRef.current) {
      const btnWidth = btnRef.current.offsetWidth;
      const btnHeight = btnRef.current.offsetHeight;
      const x = Math.floor(Math.random() * (window.innerWidth - btnWidth));
      const y = Math.floor(Math.random() * (window.innerHeight - btnHeight));

      setButtonStyle({
        position: "fixed",
        left: `${x}px`,
        top: `${y}px`,
      });
    }
  };

  const handleAnswerYes = () => {
    window.alert("RESPOSTA: CORRETA\n\nEU TE AMOR DA MINHA VIDA!");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="lg:text-3xl text-xl font-bold ">Namora comigo?</h1>
        <div className="flex flex-row gap-2">
          <button
            className="px-8 py-2 bg-green-500 rounded-md text-white text-center flex flex-row items-center hover:bg-green-600"
            onClick={handleAnswerYes}
          >
            Sim
          </button>
          <button
            ref={btnRef}
            className="px-8 py-2 bg-red-500 rounded-md text-white text-center flex flex-row items-center hover:bg-red-600"
            onClick={handleAnswerNo}
            onMouseOver={handleAnswerNo}
            style={buttonStyle}
          >
            Não
          </button>
        </div>
      </div>
    </main>
  );
}
