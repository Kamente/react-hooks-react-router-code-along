import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='about'>
                    <About />
                </Route>
                <Route exact path='login'>
                    <Login />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}
export default App;