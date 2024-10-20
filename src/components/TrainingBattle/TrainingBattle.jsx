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
      <form action="">
        <div className="screen-theme-container">
          <ThemeSelector
            theme="Dessins animés"
            theme_bg="bg_selector_cartoon"
            theme_id="cartoons"
          />
          <ThemeSelector theme="Films" theme_id="movies" />
          <ThemeSelector theme="Séries" theme_id="series" />
          <ThemeSelector theme="Jeux vidéo" theme_id="videogames" />
          <ThemeSelector theme="Mathématiques" theme_id="maths" />
          <ButtonSelector mode="XXXXXXX" theme_id="xxx" />
        </div>
        <div className="scene-rules">Choisissez une difficulté.</div>
        <div className="screen-theme-container">
          <ThemeSelector theme="Facile" theme_id="easy" />
          <ThemeSelector theme="Intermédiaire" theme_id="standard" />
          <ThemeSelector theme="Avancé" theme_id="advanced" />
        </div>
      </form>

      <button onClick={handleClickToReturnMainMenu}> Retour </button>
    </div>
  );
}

export default TrainingBattle;
