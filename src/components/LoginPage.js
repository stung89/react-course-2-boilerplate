import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
        <header className="header">
            <div className="header__logo-box">
                <img src="images/logo-white.png" alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated" onClick={startLogin}>Login with Google</a>
            </div>
        </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);