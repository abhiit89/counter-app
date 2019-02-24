import React, {Component} from 'react';
import Counter from './counterComponent'

class Counters extends Component {

    render() {
        return (
            <div>
                <button className="btn btn-dark btn-sm m-2" onClick={this.props.onMasterReset}>Master Reset</button>
                {this.props.counters.map((counter) =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onReset={this.props.onReset}
                        counter={counter}/>)
                }
            </div>
        );
    }
}

export default Counters;