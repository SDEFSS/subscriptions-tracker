import React, {Component} from 'react';
import "../style/navbar-style.css"

class NavBar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <div className="sidebar-heading" href="#">
                    <img className="mb-2 ml-4" src="https://picsum.photos/75" alt=""/>
                    <br/><b>Subscription Counter</b>
                </div>
            </div>
        );
    }
}

export default NavBar;
