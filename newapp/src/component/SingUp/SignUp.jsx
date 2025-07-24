import { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
    let [signupData, setSignupData] = useState({});

    let handleChange = (e) => {
        let { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    let handleClick = () => {

        axios.post("http://localhost:5000/api/auth/signup",signupData).then((res)=>{
            console.log(res);
            alert(res);
        })

        console.log(signupData);
    };

    return (
        <>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-3"></div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header-style card-header">
                                Sign Up
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="first name" aria-label="First name" name="firstName" id="firstName" onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="last name" aria-label="Last name" name="lastName" id="lastName" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="combination of (1-10, a-z, !@#%^&*)" name="password" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="confirm password" name="confirmPassword" onChange={handleChange} />
                                </div>
                                <Link to="/login">Already have an account? Log In</Link>
                                <div className="btn-style">
                                    <button className="btn btn-primary" onClick={handleClick}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
