import Loading from './components/patials/loading/Loading'
import Header from './components/patials/header/Header'
import Footer from './components/patials/footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/style.scss';
import Homepage from './components/homepage/Homepage';
import { ROOT_PATH } from './constant/route';

function App() {
  return (
    <div className="App">
        <Loading></Loading>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path={ROOT_PATH}>
              <Homepage></Homepage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
