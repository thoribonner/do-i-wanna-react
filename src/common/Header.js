import { useHistory } from "react-router-dom"



export default function Header(){
  const history = useHistory();
  return (
    <header>
      <div
        className="title"
        onClick={() => history.push("/")}
      >
        <h1 className="title-text">🧠 do i wanna...</h1>
      </div>
    </header>
  )
}