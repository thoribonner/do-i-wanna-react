import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";

export default function Footer() {
  const history = useHistory();
  return (
    <footer>
      <div className="flex-row">
        <p className="btn" onClick={() => history.push("/")} >start over</p>
        <p className="btn" onClick={() => window.location.reload()} >again</p>
      </div>

      <h2 className="footer-item">give your 🧠 a rest</h2>
    </footer>
  );
}
