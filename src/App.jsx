import { useState } from 'react'
import './App.css'

const App = () => {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning) return;

    // Generar un número aleatorio entre 720 y 1080
    const min = 720;
    const max = 1080;
    const randomAddend = Math.floor(Math.random() * (max - min + 1)) + min;

    // Generar el ángulo aleatorio
    const baseAngle = Math.floor(Math.random() * 360); // Rango [0, 359]
    const newAngle = baseAngle + randomAddend;

    // Asegúrate de que el ángulo tenga al menos 2 vueltas
    const angleWithAdditionalTurns = newAngle + 360 * 2;

    // Establecer el nuevo ángulo y activar el estado de rotación
    setAngle(prevAngle => prevAngle + angleWithAdditionalTurns - (prevAngle % 360));
    setIsSpinning(true);

    // Esperar el tiempo de la animación para desactivar el estado de rotación
    setTimeout(() => {
      setIsSpinning(false);
    }, 3000); // Ajusta este valor según la duración de tu animación
  };

  return (
    <section className="ruleta-container">
      <ul
        className="circle"
        style={{ transform: `rotate(${angle}deg)`, transition: 'transform 3s ease-out' }}
      >
        <li><div className="section" spellCheck="false">1</div></li>
        <li><div className="section" spellCheck="false">2</div></li>
        <li><div className="section" spellCheck="false">3</div></li>
        <li><div className="section" spellCheck="false">4</div></li>
        <li><div className="section" spellCheck="false">5</div></li>
        <li><div className="section" spellCheck="false">6</div></li>
        <li><div className="section" spellCheck="false">7</div></li>
        <li><div className="section" spellCheck="false">8</div></li>
        <li><div className="section" spellCheck="false">9</div></li>
        <li><div className="section" spellCheck="false">10</div></li>
        <li><div className="section" spellCheck="false">11</div></li>
        <li><div className="section" spellCheck="false">12</div></li>
        <div className="arrow"></div>
      </ul>
      <button onClick={spin} disabled={isSpinning}>
        Girar
      </button>
    </section>
  );
};

export default App
