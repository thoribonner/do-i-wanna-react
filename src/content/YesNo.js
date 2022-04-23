export default function YesNo({decider, handleClick, history}) {
  return (
    <div className="content">
      <p className="info">tap 🤔 below to get your response</p>
      <div onClick={handleClick}>
        {decider === null ? (
          <div className="main">
            <div className="emoji">🤔</div>
            <p className="msg">let's go!</p>
          </div>
        ) : decider % 2 === 0 ? (
          <div className="main">
            <div className="emoji">👍🏻</div>
            <p className="msg">yes!</p>
          </div>
        ) : (
          <div className="main">
            <div className="emoji">👎🏻</div>
            <p className="msg">no!</p>
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
