import PropTypes from "prop-types";
import Replay from "/assets/replay.png";

function QuizzEntry({ audio_id, difficulte, id, length, question, reponses }) {
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
      <div className="screen-answers-container">
        {reponses.map((reponse, index) => (
          <div key={index} className="screen-answers">
            {Object.values(reponse)[0]}
          </div>
        ))}
      </div>
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
};

export default QuizzEntry;
