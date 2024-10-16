import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizzEntry from "../QuizzEntry/QuizzEntry";
import ScreenTop from "../ScreenTop/ScreenTop";

function BattleQuizzSolo() {
  const [questions, setQuestions] = useState([]);
  const [questionsEasy, setQuestionsEasy] = useState([]);
  const [questionsStandard, setQuestionsStandard] = useState([]);
  const [questionsAdvanced, setQuestionsAdvanced] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../../data/quizz_theme_cartoons.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setQuestions(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestionsEasy(
        questions.filter((question) => question.difficulte === "Facile")
      );
      setQuestionsStandard(
        questions.filter((question) => question.difficulte === "Intermédiaire")
      );
      setQuestionsAdvanced(
        questions.filter((question) => question.difficulte === "Avancé")
      );
      console.log(questionsEasy);
      console.log(questionsStandard);
      console.log(questionsAdvanced);
    }
  }, [questions]);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * questionsEasy.length));
  }, [questionsEasy]);

  useEffect(() => {
    setTimeout(() => {
      const audio = document.getElementById("audio");
      audio.volume = 1;
      audio.play();
    }, 2000);
  });

  const handleClickToReturnMainMenu = () => {
    navigate("/solo");
  };

  return (
    <div className="screen-container-battle">
      <ScreenTop title="Training Battle" />
      {questionsEasy && questionsEasy.length > 0 && (
        <QuizzEntry
          audio_id={questionsEasy[randomNumber].id}
          difficulte={questionsEasy[randomNumber].difficulte}
          id={questionsEasy[randomNumber].id}
          length={questionsEasy.length}
          question={questionsEasy[randomNumber].question}
          reponses={questionsEasy[randomNumber].reponses}
        />
      )}
      <button onClick={handleClickToReturnMainMenu}> Retour </button>
    </div>
  );
}

export default BattleQuizzSolo;
