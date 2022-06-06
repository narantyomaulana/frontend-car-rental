import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token')

    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      setIsLoading(true)
    }

    if(!token) {
      return <Navigate to="/login" />
    }

  return (
    <div>
      <div className='text-center mt-5'>
        <h1>Ini Halaman Dashboard On Progress</h1>
        <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard
