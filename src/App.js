import Team from './views/Team'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home';
import NavbarHero from './components/NavbarHero'
import Login from './views/Login';
import LoginPrivate from './components/LoginPrivate';

const App = () => {
  return (
    <Router>
      <NavbarHero />
      <div className="container" >
        <main className='py-3'>
            <LoginPrivate path='/' component={Home} exact/>
            <Route path='/login' component={Login}/>
            <LoginPrivate path='/teammaker' component={Team} />
        </main>
      </div>
    </Router>
  );
}

export default App;
