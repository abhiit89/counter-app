import React, {Component} from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/200',
        altText: "Sample Alt Text for SEO",
        tags: ['tag1', 'tag2', 'tag3']
    };

    // styles = {
    //     fontSize: 18,
    //     fontWeight: 'bold'
    // }

    // constructor(){
    //     super();
    //     console.log("Constructor ", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement() {
    //     console.log('Increment Clicked!!!',this);
    // }

    handleIncrement = () => this.setState({count: this.state.count + 1})

    render() {
        return (
            <div>
                {/*<img src={this.state.imgUrl} alt={this.state.altText}/>*/}
                {/*<span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>*/}
                {/*<button style={{fontSize: 18}} className="btn btn-secondary btn-sm">Increment</button>*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.length === 0 && 'Please create some tags'}
                    {/*{this.state.tags.length !== 0 && this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}*/}
                    {this.renderTags()}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    renderTags() {
        return this.state.tags.length === 0 ? <p>There are no items ! </p> : this.state.tags.map((tag) => <li
            key={tag}>{tag}</li>);
    }
}

export default Counter;