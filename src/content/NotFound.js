import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./NotFound.css"

export default function NotFound() {
  const history = useHistory();

  return (
    <div className="not-found">
      <h2>page not found</h2>
      <div className="not-found-item">
        <div className="emoji">
        🤔
        </div>
        <p className="btn" onClick={() => history.push("/")} >return home</p>
      </div>
    </div>
  )
}