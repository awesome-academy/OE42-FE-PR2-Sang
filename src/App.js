import Loading from './components/patials/loading/Loading'
import Header from './components/patials/header/Header'
import Footer from './components/patials/footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './scss/style.scss';

function App() {
  return (
    <div className="App">
        <Loading></Loading>
        <Router>
          <Header></Header>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
