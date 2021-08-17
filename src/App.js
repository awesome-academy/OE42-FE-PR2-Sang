import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { NotFound } from './components/common';
import Homepage from './components/homepage/Homepage';
import Login from './features/auth/pages/login/Login';
import Footer from './components/patials/footer/Footer';
import Header from './components/patials/header/Header';
import Loading from './components/patials/loading/Loading';
import Register from './features/auth/pages/register/Register';
import { LOG_IN_PATH, REGISTER_PATH, ROOT_PATH } from './constant/route';
import './scss/style.scss';

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
            <Route path={LOG_IN_PATH}>
                <Login></Login>
            </Route>
            <Route path={REGISTER_PATH}>
                <Register></Register>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
