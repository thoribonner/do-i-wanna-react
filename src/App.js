import { Route, Switch } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import FlipCoin from './content/FlipCoin';
import RandomPicker from './content/RandomPicker';
import YesNo from './content/YesNo';
import Home from './home/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/yes-no"}>
          <YesNo />
        </Route>
        <Route exact path={"/flip-coin"}>
          <FlipCoin />
        </Route>
        <Route exact path={"/random-picker"}>
          <RandomPicker />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
