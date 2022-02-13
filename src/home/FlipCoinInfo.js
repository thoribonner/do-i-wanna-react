import { useHistory } from "react-router-dom"

export default function FlipCoinInfo() {
  const history = useHistory();
  return(
    <div
      onClick={() => history.push("/flip-coin")}
    >
      <h2>flip a coin</h2>
    </div>
  )
}