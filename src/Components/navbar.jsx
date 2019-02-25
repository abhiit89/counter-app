import React, {Component} from 'react';


// example of stateless functional components (SFC) is given below where navbar is created as a functional stateless component.
// choice of method of creating components using classes or functions is purely personal.

// const NavBar = (props) =>{
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand">Counters <span
//                 className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
//         </nav>
//     )
// }

// showing object destructure in SFC

// const NavBar = ({totalCounters}) =>{
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand">Counters <span
//                 className="badge badge-pill badge-secondary">{totalCounters}</span></a>
//         </nav>
//     )
// }

class NavBar extends Component {

    constructor() {
        super();
        console.log(`NavBar -Component-Constructor Called`);
    }

    render() {
        const {totalCounters} = this.props;
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Counters <span
                    className="badge badge-pill badge-secondary">{totalCounters}</span></a>
            </nav>
        )
    }
}

export default NavBar;