import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { NotFound } from './components/common';
import Homepage from './components/homepage/Homepage';
import Footer from './components/patials/footer/Footer';
import Header from './components/patials/header/Header';
import Loading from './components/patials/loading/Loading';
import { EVENT_PATH, LOG_IN_PATH, MOVIE_COMING_PATH, MOVIE_DETAIL_PATH, MOVIE_SEARCH_PATH, MOVIE_SHOWING_PATH, REGISTER_PATH, ROOT_PATH } from './constant/route';
import Login from './features/auth/pages/login/Login';
import Register from './features/auth/pages/register/Register';
import EventPage from "./features/eventPage/EventPage";
import MovieDetail from "./features/moviePage/MovieDetail";
import MoviePage from "./features/moviePage/MoviePage";
import Search from "./features/search/Search";
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
            <Route path={EVENT_PATH}>
              <EventPage></EventPage>
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
