import React from 'react';
import { Navigate } from "react-router-dom";


function Logout() {

  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = 'http://localhost:5173/#/chef/login';

    // return <Navigate to='/chef/login'/>;
  };

  return (
    <div className='container mt-4'>
      <div className="row">
        <div className="col-md-4 col-6 offset-4">
          <div className="card">
              <h1 className="card-header">Logout</h1>
              <div className="card-body">
              <button className="mt-2 btn btn-warning" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
