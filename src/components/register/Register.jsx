import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () =>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[alert, setAlert] = useState('');
	const[error, setError] = useState('');


    const ChangeEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
		setError('')
    }


    const ChangePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
		setError('')
    }
    const klikDaftar = () =>{
        const data = {
            email: email,
            password: password
        }
        // // Menggunakan Backend Challange 6
        axios.post('http://localhost:8080/api/v1/register', data)
        .then(result => {
            if(result){
                if(result.data){
					setEmail('')
					setPassword('')
                    setAlert(result.data.message)
					setTimeout(()=>{
						setAlert('')
					},2000)
                }
            }
        })
		.catch(e => {
			setError(e.response.data.message);
		})
    }

    return (
        <div style={{ marginTop: "170px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <h1 className="fw-bold text-center">Halaman Register</h1>
                        <div className="card">
                            <div className="card-body">
								{
                                    error && (
										<div className="alert alert-danger">
											<p>{error}</p>
										</div>
                                    )
                                }
                                {
                                    alert && (
										<div className="alert alert-primary">
											<p>{alert}</p>
										</div>
                                    )
                                }
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="email" className="form-control" value={email} onChange={ChangeEmail} ></input>
                                </div>
                                <div className="form-group mt-4">
                                    <label>Password</label>
                                    <input type="password" placeholder="password" className="form-control" value={password} onChange={ChangePassword} ></input>
                                </div>
                                <button className="btn btn-primary" style={{ marginTop:"20px" }} onClick={klikDaftar}>Daftar</button>
                                <Link to="/" className="btn btn-warning" style={{ marginLeft: "10px",marginTop:"20px" }}>
                                    Batal
                                </Link>
                                <div className="justify-text-right" style={{ marginLeft:"50px", display:"inline", marginTop:"30px" ,position:"absolute" }}>
                                    <Link to="/login" className="login">
                                        Have an Account. Sign In Now?
                                    </Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Register