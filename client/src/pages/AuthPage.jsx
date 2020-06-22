import React from 'react';

export const AuthPage = () => {
    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Link</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth</span>
                        <div>
                            <div class="input-field">
                                <input
                                    id="email"
                                    type="email"
                                    className="validate yellow-input" />
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    className="validate yellow-input" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className='btn yellow darken-4' style={{ marginRight: 10 }}>Login</button>
                        <button className='btn grey lighten-1 black-text'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
