import { useHistory } from "react-router-dom"

export default function YesNoInfo() {
  const history = useHistory();
  return(
    <div
    onClick={() => history.push("/yes-no")}
    >
      <h2>yes or no</h2>
    </div>
  )
}