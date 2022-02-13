import { useHistory } from "react-router-dom"



export default function Header(){
  const history = useHistory();
  return (
    <header>
      <div
        className="title"
        onClick={() => history.push("/")}
      >
        <i className="fa-solid fa-brain"></i>
        <h1>do i wanna...</h1>
      </div>
    </header>
  )
}