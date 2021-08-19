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
import { LOG_IN_PATH, MOVIE_COMING_PATH, MOVIE_PATH, MOVIE_SHOWING_PATH, REGISTER_PATH, ROOT_PATH, MOVIE_SEARCH_PATH, MOVIE_DETAIL_PATH } from './constant/route';
import './scss/style.scss';
import MoviePage from "./features/moviePage/MoviePage";
import moviesApi from "./apis/moviesApi";
import Search from "./features/search/Search";
import MovieDetail from "./features/moviePage/MovieDetail";

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
            <Route path={MOVIE_SHOWING_PATH}>
              <MoviePage categories="showing"></MoviePage>
            </Route>
            <Route path={MOVIE_COMING_PATH}>
              <MoviePage categories="coming"></MoviePage>
            </Route>
            <Route path={MOVIE_SEARCH_PATH}>
              <Search></Search>
            </Route>
            <Route path={MOVIE_DETAIL_PATH}>
              <MovieDetail></MovieDetail>
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
