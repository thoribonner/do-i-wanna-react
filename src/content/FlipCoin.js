export default function FlipCoin({decider, handleClick, history}) {
  return (
    <div className="content">
      <p className="info">tap 🤔 below to get your response</p>
      <div onClick={handleClick}>
        {decider === null ? (
          <div className="main">
            <div className="emoji">🤔</div>
            <p className="msg">let's go!</p>
          </div>
        ) : decider % 37 === 0 ? (
          <div className="main">
            <div className="emoji">🥺</div>
            <p className="msg">oops!</p>
            <p className="oops">i lost the coin.</p>
          </div>
        ) : decider % 2 === 0 ? (
          <div className="main">
            <div className="emoji">👽</div>
            <p className="msg">heads!</p>
          </div>
        ) : (
          <div className="main">
            <div className="emoji">🍑</div>
            <p className="msg">tails!</p>
          </div>
        )}
      </div>
      <div className="flex-row">
        <p className="btn" onClick={() => history.push("/")} >start over</p>
        <p className="btn" onClick={() => history.go(0)} >again</p>
      </div>
    </div>
  );
}
