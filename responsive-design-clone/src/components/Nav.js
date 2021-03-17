import React, { Component } from 'react'


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            menuDisplay: false
        }
    }

    menuToggle = () => {
        console.log(this.state.menuDisplay)
        this.setState({ menuDisplay: !this.state.menuDisplay })
    }


    render() {
        return (
            <nav>
                <div className='navBtn'>
                    <p>Menu</p>
                    <div className='burgerContainer'>
                        <div className='hamburger'></div>
                        <div className='hamburger'></div>
                        <div className='hamburger'></div>
                    </div>
                </div>

                <ul className={this.state.menuDisplay ? 'hiddenMenu' : ''}>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;