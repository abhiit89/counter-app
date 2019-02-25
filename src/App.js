import React, {Component} from 'react';
import NavBar from './Components/navbar'
import './App.css';
import Counters from "./Components/countersComponent";

class App extends Component {

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 2},
            {id: 3, value: 0},
            {id: 4, value: 4}
        ]
    }

    constructor() {
        super();
        console.log(`App-Component-Constructor Called`);
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((counter) => counter.id !== counterId);
        // this.setState({counters:counters});
        this.setState({counters}); // key and values to be passed is same. Using Object de structuring
    }

    handleIncrement = (counterId) => {
        const counters = this.state.counters.map((counter) => {
            if (counter.id !== counterId) {
                return counter;
            } else {
                counter.value = counter.value + 1;
                return counter
            }
        });
        this.setState({counters}); // key and values to be passed is same. Using Object de structuring
    }

    handleReset = (counterId) => {
        const counters = this.state.counters.map((counter) => {
            if (counter.id !== counterId) {
                return counter;
            } else {
                counter.value = 0;
                return counter
            }
        });
        this.setState({counters}); // key and values to be passed is same. Using Object de structuring
    }

    handleDecrement = (counterId) => {
        const counters = this.state.counters.map((counter) => {
            if (counter.id !== counterId) {
                return counter;
            } else {
                counter.value = counter.value - 1;
                return counter
            }
        });
        this.setState({counters}); // key and values to be passed is same. Using Object de structuring
    }

    /**
     * this way of updating the counters array actually propagates to the child component (Counter)
     **/
        // result of using this method
        // counters:
        //     Array[4]
        // 0:
        //     0
        // 1:
        //     0
        // 2:
        //     0
        // 3:
        //     0


        // masterReset = () => {
        // const counters = this.state.counters.map(counter => counter.value = 0);
        // this.setState({counters})
        // }


    handleMasterReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter
        });
        this.setState({counters})
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onMasterReset={this.handleMasterReset}/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
