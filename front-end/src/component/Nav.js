import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info fixed-top">
                <div className="container-fluid">
                    <div className="collapse text-white navbar-collapse">
                        <a className="navbar-brand">
                            <img src={logo} width="30" height="30" className="d-inline-block rounded-circle align-top" alt="logo"/>
                        </a>
                        {
                            auth ?
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/add">Add Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/update">Update Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/profile">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={logout} href="/signup">Logout ({JSON.parse(auth).name})  </a>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signup">SignUp</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav; 
