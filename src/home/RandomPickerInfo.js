import { useHistory } from "react-router-dom";
import "./Card.css";

export default function RandomPickerInfo() {
  const history = useHistory();
  return(
    <div
      className="card"
      onClick={() => history.push("/random-picker")}
    >
      <h2>random picker</h2>
      <p>when you have a slew of options and no idea where to start: <span>start here!</span></p>
    </div>
  )
}