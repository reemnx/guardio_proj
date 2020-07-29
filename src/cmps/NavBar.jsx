import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class NavBar extends Component {
    render() {
        return (
            <nav style={{padding:"0px 30px"}} className="nav-content-wrapper flex column align-center justify-center">
                <h2>im nav bar!</h2>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
    const mapDispatchToProps = {  

    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))