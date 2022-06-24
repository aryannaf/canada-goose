import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Beyond from './components/Beyond/Beyond';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
