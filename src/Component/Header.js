import React, { Component } from 'react';
//import header from "Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.getUser = React.createRef();

    }

    handleClick = () => {

        alert(this.getUser.current)
    }



    render() {
        // eslint-disable-next-line
        // const {  } = this.props;

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return (
            <React.Fragment>

                <div style={mystyle}>
                    <h1> Book Club</h1>
                    <div style={{ "margin-left": "1200px", "margin-top": "-50px" }}>
                        <input type="text" placeholder="UserA" />
                        <button ref={this.getUser} onClick={this.handleClick}> Submit </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Header