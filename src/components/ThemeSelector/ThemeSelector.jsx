function ThemeSelector({ theme, theme_bg, onClick }) {
  return (
    <div
      className="screen-theme-selector"
      onClick={onClick}
      style={{ backgroundImage: `url(/public/assets/${theme_bg}.png)` }}
    >
      {theme}
    </div>
  );
}

export default ThemeSelector;
