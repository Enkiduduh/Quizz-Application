import { useState } from "react";

function ThemeSelector({ theme, theme_bg, theme_id, onClick, onChange }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (reponse) => {
    setSelectedAnswer(reponse);
    if (onChange) {
      onChange(reponse); // Appel d'une fonction onChange si définie (peut être utilisée pour passer l'info au parent)
    }
    console.log(reponse.value);
  };

  return (
    <label htmlFor={theme_id} className="custom-radio-label-theme_id">
      <input
        id={theme_id}
        type="radio"
        className="screen-theme-selector"
        onClick={onClick}
        style={{ backgroundImage: `url(/public/assets/${theme_bg}.png)` }}
        value={theme}
        onChange={handleAnswerChange}
      />
      <div className="screen-theme">{theme}</div>
    </label>
  );
}

export default ThemeSelector;
