import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import News from './Components/News';
import Games from './Components/Games';
import Nav from './Components/Nav';
import Game from "./Components/Game";
import SingleNews from "./Components/SingleNews";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

    return (
        <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/games" component = {Games}/>
                <Route exact path = "/news" component = {News}/>
                <Route exact path = "/game" component={Game} />
                <Route exact path = "/singleNews" component={SingleNews} />
            </Switch>
        </div>
        </Router>
    );

}
const Home = () =>(
    <div className="headerDiv">
        <header className="App-header">
            <h1>Game Forum</h1>
            <h5>Find Games and Latest Information about Gaming Industry</h5>
            <h5>Select <span style = {{color:"red"}}>Game</span> or <span style = {{color:"red"}}>News</span> From the Top Navigation Bar</h5>
        </header>
    </div>
);

export default App;
