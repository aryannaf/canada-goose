import './App.scss';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Beyond from './components/Beyond/Beyond';
import Footer from './components/Footer/Footer';
import Member from './components/Member/Member';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import JoinBeyond from './pages/JoinBeyond';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
    <Switch>
      <Route path='' component={JoinBeyond}/>
    </Switch>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
