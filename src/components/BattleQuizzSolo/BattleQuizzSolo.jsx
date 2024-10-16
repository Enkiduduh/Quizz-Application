import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Replay from "/assets/replay.png";
import myAudioFile from "../../assets/soundtracks/cartoons/cartoon_easy_voice_1.m4a";
import ScreenTop from "../ScreenTop/ScreenTop";

function BattleQuizzSolo() {
  const [questions, setQuestions] = useState([]);
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
      {questions && questions.length > 0 && (
        <>
          <audio id="audio" src={myAudioFile}></audio>
          <div className="screen-infos">
            <div className="screen-level">
              Niveau: {questions[0].difficulte}
            </div>
            <img
              className="screen-audio"
              src={Replay}
              alt=""
              onClick={() => document.getElementById("audio").play()}
            ></img>
            <div className="screen-progression">1/21</div>
          </div>
          <div className="screen-question">{questions[0].question}</div>
          <div className="screen-answers-container">
            {questions[0].reponses.map((reponse, index) => (
              <div key={index} className="screen-answers">
                {Object.values(reponse)[0]}
              </div>
            ))}
          </div>
        </>
      )}
      <button onClick={handleClickToReturnMainMenu}> Retour </button>
    </div>
  );
}

export default BattleQuizzSolo;
