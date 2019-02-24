import React, {Component} from 'react';
import Counter from './counterComponent'

class Counters extends Component {

    state = {
        counters: [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4}
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((counter)=> counter.id !== counterId);
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


    masterReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter
        });
        this.setState({counters})
    }

    render() {
        return (
            <div>
                <button className="btn btn-dark btn-sm m-2" onClick={this.masterReset}>Master Reset</button>
                {this.state.counters.map((counter) =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                        counter={counter}/>)
                }
            </div>
        );
    }
}

export default Counters;