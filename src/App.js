import './App.css';
import HomePage from './pages/HomePage';
import {Navbar} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';
import UpcomingLaunches from './components/UpcomingLaunches';
import PastLaunches from './components/PastLaunches';
import DateLaunches from './components/DateLaunches';
import ViewModal from './components/ViewModal';
import DateLaunchesList from './components/DateLaunchesList';


function App() {
  return (
    <>
        <div className='mb-3'>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/">
             SPACE-X
            </Navbar.Brand>
        </Navbar>
        </div>
        

        <BrowserRouter>
        <Route exact path='/' component={HomePage}></Route> 
        <Route exact path='/upcomingLaunches' component={UpcomingLaunches}></Route>
        <Route exact path='/pastLaunches' component={PastLaunches}></Route>
        <Route exact path='/launchesByDate' component={DateLaunches}></Route>
        
       </BrowserRouter>
    </>
  );
}

export default App;
