import React, { useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { AuthContext } from './../context/AuthContext';


export const Navbar = () => {
    // const history = useHistory();
    const auth = useContext(AuthContext);
    // const logoutHandler = () => {
    //     auth.logout();
    //     history.push('/');
    // };
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-1" style={{padding: '0 2rem'}}>
                <Link to="/" className="brand-logo">Blog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><Link to='/' onClick={auth.logout} className="waves-effect waves-light btn">Logout</Link></li>
                </ul>
            </div>
        </nav>
    )
}