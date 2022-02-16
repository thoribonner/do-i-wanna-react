import { Route, Switch } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import FlipCoin from './content/FlipCoin';
import NotFound from './content/NotFound';
import RandomPicker from './content/RandomPicker';
import YesNo from './content/YesNo';
import Home from './home/Home';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/yes-no"}>
            <YesNo />
          </Route>
          <Route exact path={"/flip-coin"}>
            <FlipCoin />
          </Route>
          <Route exact path={"/random-picker"}>
            <RandomPicker />
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
