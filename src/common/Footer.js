import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  return (
    <footer>
      <h2 className="footer-item">give your 🧠 a rest</h2>
    </footer>
  );
}
