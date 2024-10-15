import { useNavigate } from "react-router-dom";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import ButtonSelector from "../ButtonSelector/ButtonSelector";
import ScreenTop from "../ScreenTop/ScreenTop";
function TrainingBattle() {
  const navigate = useNavigate();

  const handleClickToReturnMainMenu = () => {
    navigate("/solo");
  };
  return (
    <div className="screen-container">
      <ScreenTop title="Training Battle" />
      <div className="scene-rules">Choisissez un thème.</div>
      <div className="screen-theme-container">
        <ThemeSelector theme="Dessins animés" />
        <ThemeSelector theme="Films" />
        <ThemeSelector theme="Séries" />
        <ThemeSelector theme="Jeux vidéo" />
        <ThemeSelector theme="Mathématiques" />
        <ButtonSelector mode="XXXXXXX"  />
      </div>
      <div className="scene-rules">Choisissez une difficulté.</div>
      <div className="screen-theme-container">
        <ThemeSelector theme="Facile" />
        <ThemeSelector theme="Intermédiaire" />
        <ThemeSelector theme="Avancé" />
      </div>
      <button onClick={handleClickToReturnMainMenu}> Retour </button>
    </div>
  );
}

export default TrainingBattle;
