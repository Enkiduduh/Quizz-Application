import React from "react";
import Replay from "/assets/replay.png";

function QuizzEntry({ audio, difficulte, id, length, question, reponses,   }) {
  return (
    <>
      <audio id="audio" src={audio}></audio>
      <div className="screen-infos">
        <div className="screen-level">Niveau: {difficulte}</div>
        <img
          className="screen-audio"
          src={Replay}
          alt=""
          onClick={() => document.getElementById("audio").play()}
        ></img>
        <div className="screen-progression">Collection: {id}/{length}</div>
      </div>
      <div className="screen-question">{question}</div>
      <div className="screen-answers-container">
        {Array.map((reponse, index) => (
          <div key={index} className="screen-answers">
            {Object.values(reponse)[0]}
          </div>
        ))}
      </div>
    </>
  );
}

export default QuizzEntry;
