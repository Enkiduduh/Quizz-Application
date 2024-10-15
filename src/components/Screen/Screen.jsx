import ScreenTop from "../ScreenTop/ScreenTop";
import ButtonSelector from "../ButtonSelector/ButtonSelector";
import { useNavigate } from "react-router-dom";

function Screen() {
  const navigate = useNavigate();

  const handleClickToSolo = () => {
    navigate("/solo");
  };

  return (
    <div className="screen-container">
      <ScreenTop title="Quizz'App" />
      <div className="screen-center">
        <div className="screen-slogan">
          Don&apos;t waste your time, <br />
          learn, laugh and battle <br />
          your friends to the top !
        </div>
        <div className="screen-modes">
          <ButtonSelector mode="Solo Battle Mode" onClick={handleClickToSolo}/>
          <ButtonSelector mode="Multi Battle Mode" />
          <ButtonSelector mode="Leaderboards" />
          <ButtonSelector mode="Options" />
        </div>
      </div>
    </div>
  );
}

export default Screen;
