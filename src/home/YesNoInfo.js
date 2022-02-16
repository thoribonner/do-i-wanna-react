import { useHistory } from "react-router-dom"
import "./Card.css";

export default function YesNoInfo() {
  const history = useHistory();
  return(
    <div
      className="card"
      onClick={() => history.push("/yes-no")}
    >
      <h2>yes or no</h2>
      <p>when you have a simple yes or no decision to make or you want a magic-8-ball-esque response (but more direct): <span>shake here!</span></p>
    </div>
  )
}