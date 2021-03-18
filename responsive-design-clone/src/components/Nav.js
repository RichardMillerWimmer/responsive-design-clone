import React, { Component } from 'react'


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            menuHidden: true
        }
    }

    menuToggle = () => {
        console.log(this.state.menuHidden)
        this.setState({ menuHidden: !this.state.menuHidden })
    }


    render() {
        console.log(this.state.menuHidden)
        return (
            <nav >
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
                <div className={this.state.menuHidden ? 'navBarDrop hiddenMenu' : 'navBarDrop'}>
                    <ul >
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;