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
  onClick,
  onChange,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Suivi de l'index de la question actuelle
  const [selectedAnswer, setSelectedAnswer] = useState(null); // État pour stocker la réponse sélectionnée
  const [counter, setCounter] = useState(0);

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

  // Fonction pour réinitialiser les styles et l'état des réponses
  const reset = () => {
    const resultRight = document.getElementById("right");
    const resultWrong = document.getElementById("wrong");

    if (resultRight) {
      resultRight.style.display = "none";
      console.log("Before incrementing counter:", counter);
      // Utilisez la fonction de mise à jour fonctionnelle pour garantir que vous utilisez la dernière valeur de `counter`
      setCounter((prevCounter) => {
        console.log("Incrementing counter:", prevCounter + 1);
        return prevCounter + 1;
      });
    }

   if (resultWrong) {
    resultWrong.style.display = "none";
    setCounter((prevCounter) => {
      console.log("Keeping counter unchanged:", prevCounter);
      return prevCounter;
    });
  }
    // Réinitialiser toutes les div de réponses
    const allAnswers = document.querySelectorAll(".screen-answers");
    allAnswers.forEach((answer) => {
      answer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Enlever la mise en forme de la réponse

    });

    // Réinitialiser la réponse sélectionnée
    setSelectedAnswer(null);
  };

  // Gestion du clic sur "Suivant"
  const handleClick = () => {
    onClick(); // Appel de la fonction onClick passée par le parent pour charger la question suivante
    reset(); // Réinitialiser l'affichage
  };

  return (
    <>
      <audio
        id="audio"
        src={`../../assets/soundtracks/cartoons/cartoon_easy_voice_${audio_id}.m4a`}
      ></audio>
      <div className="screen-infos">
        <div className="screen-level">Niveau: {difficulte}</div>
        <div className="screen-score">Score: {counter}</div>
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
                checked={selectedAnswer === reponse} // Associer l'état checked avec selectedAnswer
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
                <div className="result next" onClick={handleClick}>
                  Suivant
                </div>
              </div>
            ) : (
              <div className="screen-result" id="wrong">
                <div className="result bool">Mauvaise réponse ...</div>
                <div className="result score">Score +0</div>
                <div className="result next" onClick={handleClick}>
                  Suivant
                </div>
              </div>
            )}
          </>
        )}
      </form>
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
