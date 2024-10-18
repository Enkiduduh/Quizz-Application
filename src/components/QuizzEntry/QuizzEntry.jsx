import PropTypes from "prop-types";
import Replay from "/assets/replay.png";
import { useState } from "react";

function QuizzEntry({
  audio_id,
  difficulte,
  id,
  length,
  question,
  reponses,
  onChange,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // État pour stocker la réponse sélectionnée

  // Fonction pour gérer le changement de réponse
  const handleAnswerChange = (reponse) => {
    setSelectedAnswer(reponse);
    if (onChange) {
      onChange(reponse); // Appel d'une fonction onChange si définie (peut être utilisée pour passer l'info au parent)
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  reponses = shuffleArray(reponses);

  return (
    <>
      <audio
        id="audio"
        src={`../../assets/soundtracks/cartoons/cartoon_easy_voice_${audio_id}.m4a`}
      ></audio>
      <div className="screen-infos">
        <div className="screen-level">Niveau: {difficulte}</div>
        <img
          className="screen-audio"
          src={Replay}
          alt=""
          onClick={() => document.getElementById("audio").play()}
        ></img>
        <div className="screen-progression">
          Collection: {id}/{length}
        </div>
      </div>
      <div className="screen-question">{question}</div>
      <form action="" className="screen-form-container">
        <div className="screen-answers-container">
          {reponses.map((reponse, index) => (
            <label
              htmlFor={`reponse-${index}`} // Utilisation d'un identifiant unique pour chaque réponse
              key={index}
              className="custom-radio-label"
            >
              <input
                type="radio"
                id={`reponse-${index}`} // L'ID correspond au label "for"
                name="quizz-answer" // Tous les inputs partagent le même "name" pour être mutuellement exclusifs
                value={Object.values(reponse)[0]} // La valeur est la réponse
                className="radio-input"
                onChange={() => handleAnswerChange(reponse)} // Appel de la fonction lors du changement
              />
              <div className="screen-answers">{Object.values(reponse)[0]}</div>
            </label>
          ))}
        </div>

        {selectedAnswer && (
          <>
            {selectedAnswer.status ? (
              <div className="screen-result" id="right">
                <div className="result bool">Bonne réponse !</div>
                <div className="result score">Score +1</div>
                <div className="result next">Suivant</div>

              </div>
            ) : (
              <div className="screen-result" id="wrong">
               <div className="result bool">Mauvaise réponse ...</div>
               <div className="result score">Score +0</div>
               <div className="result next">Suivant</div>
               </div>
            )}
          </>
        )}
      </form>
      {/* Afficher si la réponse sélectionnée est correcte ou non */}
    </>
  );
}

QuizzEntry.propTypes = {
  audio_id: PropTypes.number.isRequired,
  difficulte: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  reponses: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuizzEntry;
