import { useHistory } from "react-router-dom"
import "./Header.css";



export default function Header(){
  const history = useHistory();
  return (
    <header>
      <div
        className="title"
        onClick={() => history.push("/")}
      >
        <span className="icon header-icon">🧠</span>
        <h1 className="title-text">do i wanna...</h1>
      </div>
    </header>
  )
}