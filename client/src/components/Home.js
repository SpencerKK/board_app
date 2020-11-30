import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux"

const Home = ({ isAuthenticated }) => {

    if (isAuthenticated === false) {
        return <Redirect to="/" />
    }

    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);