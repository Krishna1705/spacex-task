import './App.css';
import HomePage from './pages/HomePage';
import {Navbar} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';
import UpcomingLaunches from './components/UpcomingLaunches';
import PastLaunches from './components/PastLaunches';


function App() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/">
             SPACE-X
            </Navbar.Brand>
        </Navbar>

        <BrowserRouter>
        <Route exact path='/' component={HomePage}></Route> 
        <Route exact path='/upcomingLaunches' component={UpcomingLaunches}></Route>
        <Route exact path='/pastLaunches' component={PastLaunches}></Route>
       </BrowserRouter>
    </>
  );
}

export default App;
