import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingle from '../pages/PageSingle';
import PageSearch from '../pages/PageSearch';
import "../library/fontawesome/css/all.min.css";
import {APP_FOLDER_NAME} from '../globals/globals';

function AppRouter() {
  return (
    <Router basename={APP_FOLDER_NAME}>
    <div className="wrapper">
      <div className="content">
        <Header />
        <main>
          <Switch>
            <Route path='/' exact><PageHome sort='popular' /></Route>
            <Route path='/sort/popular'><PageHome sort='popular' /></Route>
            <Route path='/sort/top-rated'><PageHome sort='top_rated' /></Route>
            <Route path='/sort/now-playing'><PageHome sort='now_playing' /></Route>
            <Route path='/sort/upcoming'><PageHome sort='upcoming' /></Route>
            <Route path='/single-movie/:id'><PageSingle /></Route>
            <Route path='/about'><PageAbout /></Route>
            <Route path='/favs'><PageFavs /></Route>
            <Route path='/search'><PageSearch /></Route>
          </Switch>
        </main>
        </div>
      <Footer />
    </div>
    </Router>
  );
}

export default AppRouter;
