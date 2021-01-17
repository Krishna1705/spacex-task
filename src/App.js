import './App.css';
import HomePage from './pages/HomePage';
import {Navbar} from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom';



function App() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
             SPACE-X
            </Navbar.Brand>
        </Navbar>

        <BrowserRouter>
        <Route exact path='/' component={HomePage}></Route> 
        
       </BrowserRouter>
    </>
  );
}

export default App;
