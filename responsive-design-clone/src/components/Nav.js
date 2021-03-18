import React, { Component } from 'react'


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            menuDisplay: true
        }
    }

    menuToggle = () => {
        // console.log(this.state.menuDisplay)
        this.setState({ menuDisplay: !this.state.menuDisplay })
    }


    render() {
        return (
            <nav className={this.state.menuDisplay ? 'hiddenMenu' : ''}>
                <div className='navContainer'>
                    <h1>Start Bootstrap</h1>
                    <div onClick={this.menuToggle} className='navBtn'>
                        <p>Menu</p>
                        <div className='burgerContainer'>
                            <div className='hamburger'></div>
                            <div className='hamburger'></div>
                            <div className='hamburger'></div>
                        </div>
                    </div>
                </div>
                <ul >
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;