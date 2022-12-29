/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const handleLogin = async () => {
        console.warn("email,password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/")

        } else {
            alert("Please Enter Correct Details... ")
        }
    }
    return (
        <div className="vh-95 mt-5">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row flex-row-reverse justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" />
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="form-outline mb-4">
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg"
                                                    placeholder="Enter a valid email address" />
                                                <label className="form-label" >Email address</label>
                                            </div>


                                            <div className="form-outline mb-3">
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg"
                                                    placeholder="Enter password" />
                                                <label className="form-label" >Password</label>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">

                                                <div className="form-check mb-0">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                    <label className="form-check-label" >
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="#!" className="text-body">Forgot password?</a>
                                            </div>
                                            <div className="text-center text-lg-start mt-4 pt-2">
                                                <button type="button" onClick={handleLogin} className="btn  btn-primary bg-info btn-lg">Login</button>
                                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                                                    className="link-danger">Register</a></p>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Login;