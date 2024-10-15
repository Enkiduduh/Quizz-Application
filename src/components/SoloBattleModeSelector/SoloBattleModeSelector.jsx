import ScreenTop from "../ScreenTop/ScreenTop";
import ButtonSelector from "../ButtonSelector/ButtonSelector";
import { useNavigate } from "react-router-dom";

function SoloBattleModeSelector() {
  const navigate = useNavigate();

  const handleClickToReturnMainMenu = () => {
    navigate("/");
  };

  const handleClickToTrainingMenu = () => {
    navigate("/solo/training");
  };

  return (
    <div className="screen-container">
      <ScreenTop title="Solo Battle Mode" />
      <div className="screen-center">
        <div className="screen-slogan">
          In solo battle mode, <br />
          you can train or <br />
          sharpen your skills !
        </div>
        <div className="screen-modes">
          <ButtonSelector
            mode="Training Battle"
            onClick={handleClickToTrainingMenu}
          />
          <ButtonSelector mode="Survival Battle" />
          <ButtonSelector mode="Random Battle" />
          <ButtonSelector mode="Retour" onClick={handleClickToReturnMainMenu} />
        </div>
      </div>
    </div>
  );
}

export default SoloBattleModeSelector;
