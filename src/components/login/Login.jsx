import React, {useState, Fragment} from 'react';
import {Link, Navigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[navigate, setNavigate] = useState(false);
    const[error, setError] = useState('');

    const onChangeEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
		setError('')
    }
    const onChangePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
		setError('')
    }

    const submitLogin = () =>{
        const data = {
            email:email,
            password:password
        }
        // Menggunakan Backend Challange 6
        axios.post('http://localhost:8080/api/v1/login',data)
        .then (result =>{
            if(result){
                localStorage.setItem('token', result.data.token)
                setNavigate(true)
                
            }
        })
        .catch(e => {
            setError(e.response.data.message);
        })
    }
    return (
        <Fragment>
            {
                navigate && (
                    <Navigate to="/dashboard" />
                )
            }
            <div style={{ marginTop: "150px" }}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <h1 className="fw-bold text-center">Halaman Login</h1>
                            <div className='card p-4'>
                                {
                                  error && (
                                    <div className="alert alert-danger">
                                      <p>{error}</p>
                                    </div>
                                  )
                                }
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input placeholder='Masukan Email' className='form-control' value={email} onChange={onChangeEmail} />
                                    </div>
                                    <div className='form-group mt-4'>
                                        <label>Password</label>
                                        <input type= "password"placeholder='Masukan Password' className='form-control' value={password} onChange={onChangePassword}/>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-md-5'>
                                            <button className='btn btn-success' onClick={submitLogin}>Login</button>
                                            <Link to="/" className="btn btn-warning" style={{ marginLeft: "10px" }}>
                                                Batal
                                            </Link>
                                        </div>   
                                        <div className='md-4 mt-2  text-right'>
                                            <Link to="/register" className='register'>
                                                Dont Have an Account. Sign Up Now?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login