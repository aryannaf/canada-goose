import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import JoinBeyond from './pages/JoinBeyond';
import HomePage from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/beyond' component={JoinBeyond}/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
