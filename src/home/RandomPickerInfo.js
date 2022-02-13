import { useHistory } from "react-router-dom"

export default function RandomPickerInfo() {
  const history = useHistory();
  return(
    <div
    onClick={() => history.push("/random-picker")}
    >
      <h2>random picker</h2>
    </div>
  )
}