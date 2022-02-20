import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function RandomPicker() {
  const [picked, setPicked] = useState(null);
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const history = useHistory();

  const handleChange = ({ target }) => {
    setItem(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, item]);
    setItem("");
  };
  const handlePicker = () => {
    if (list.length > 0) {
      console.log(Math.floor(Math.random() * list.length))
      setPicked(list[Math.floor(Math.random() * list.length)]);
      setItem("");
      setList([]);
    }
  }

  return (
    <div className="content">
      <p className="info">
        type options in the entry field below.
        <br />
        add option by tapping the <i className="fas fa-plus"></i> button.
        <br />
        add as many items as you need!
        <br /> only one option at a time.
        <br />
        tap 🤔 below to get your response
      </p>
      <form onSubmit={handleSubmit}>
        <input name="item" value={item} onChange={handleChange} />
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </form>
      <div onClick={handlePicker}>
        {picked === null ? (
          <div className="main">
            <div className="emoji">🤔</div>
            <p className="msg">let's go!</p>
          </div>
        ) : (
          <div className="main">
          <p className="picked">{picked}</p>
          <p className="universe">the universe has spoken</p>
          </div>
        )}
      </div>
      {list.length > 0
        ? (
          <div className="options">
            <h3 className="options-heading">your options</h3>
            <ul className="option-list">
              {list.map((current, index) => (
                <li key={index}>{current}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div> </div>
        )
      }
      <div className="flex-row">
        <p className="btn" onClick={() => history.push("/")} >start over</p>
        <p className="btn" onClick={() => history.go(0)} >again</p>
      </div>
    </div>
  );
}
