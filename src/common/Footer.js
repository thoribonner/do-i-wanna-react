import { useHistory } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const history = useHistory();
  return (
    <footer>
      <div className="flex-row">
        <p className="btn" onClick={() => history.push("/")} >start over</p>
        <p className="btn" onClick={() => history.go(0)} >again</p>
      </div>

      <h2 className="footer-item">give your 🧠 a rest</h2>
    </footer>
  );
}
