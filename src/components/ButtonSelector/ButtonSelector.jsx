
function ButtonSelector({ mode, onClick }) {
  return (
    <div className="screen-mode-selector" onClick={onClick}>{ mode }</div>
  )
}

export default ButtonSelector
