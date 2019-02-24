import React, {Component} from 'react';
import NavBar from './Components/navbar'
import './App.css';
import Counters from "./Components/countersComponent";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <Counters/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
