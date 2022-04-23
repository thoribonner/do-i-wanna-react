import React, { useState } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import FlipCoin from './content/FlipCoin';
import NotFound from './content/NotFound';
import RandomPicker from './content/RandomPicker';
import YesNo from './content/YesNo';
import Home from './home/Home';

function App() {
  const [decider, setDecider] = useState(null);
  const history = useHistory();

  const handleClick = () => {
    setDecider((Math.random() * 1000).toFixed());
  };

  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/yes-no"}>
            <YesNo decider={decider} handleClick={handleClick} history={history} />
          </Route>
          <Route exact path={"/flip-coin"}>
            <FlipCoin decider={decider} handleClick={handleClick} history={history} />
          </Route>
          <Route exact path={"/random-picker"}>
            <RandomPicker history={history} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
