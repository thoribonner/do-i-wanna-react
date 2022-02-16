import { useHistory } from "react-router-dom";
import "./Card.css";

export default function FlipCoinInfo() {
  const history = useHistory();
  return(
    <div
      className="card"
      onClick={() => history.push("/flip-coin")}
    >
      <h2>flip a coin</h2>
      <p>when it's too hard to pick between two options or want a more fun way to decide yes or no or you just need to flip a coin: <span>flip here!</span></p>
    </div>
  )
}