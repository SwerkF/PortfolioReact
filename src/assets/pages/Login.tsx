import React, {useState, useEffect} from 'react';

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        if(localStorage.getItem('token')) {
            if (localStorage.getItem('token') && localStorage.getItem('rememberMe')) {
                fetch('http://localhost:3000/api/checkToken', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token: localStorage.getItem('token') })
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'invalid token') {
                        localStorage.removeItem('token')
                        localStorage.removeItem('rememberMe')
                        window.location.href = '/'
                    } else {
                        window.location.href = '/admin'
                    }
                })
            } else {
                window.location.href = '/'
            }
        }
    }, [])

    let handleChange = (e: any) => {
        if(e.target.name === 'check') {
            if(e.target.checked) {
               return localStorage.setItem('rememberMe', 'true')
            } else {
               return localStorage.removeItem('rememberMe')
            }
        } else {
            setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
            })
        }
    }

    let handleLogin = (e: any) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(data => {
            if(data.token) {
                localStorage.setItem('token', data.token)
                window.location.href = '/admin'
            } else {
                alert('Wrong credentials')
            }
        })
    }

    return (
        <div className="section-login" id="login">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="login-form">
                            <h2 className='text-center color-white pb-4'>Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-group-input">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleChange} required />
                                        <i className="fa fa-user" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required />
                                        <i className="fa fa-lock" />
                                    </div>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" name="check" id="check" onChange={handleChange} />
                                    <label className="form-check-label color-white" htmlFor="check">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3 w-100">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;