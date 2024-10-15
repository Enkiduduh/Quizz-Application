function ThemeSelector({ theme, onClick }) {
  return (
    <div className="screen-theme-selector" onClick={onClick}>
      {theme}
    </div>
  );
}

export default ThemeSelector;
