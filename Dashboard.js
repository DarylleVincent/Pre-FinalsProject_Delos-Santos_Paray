import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'



export default function Dashboard() {
   
   const [error, setError] = useState("")
   const {currentUser, logout} = useAuth()
   const history = useHistory()

   async function handleLogout() {
     setError("")

     try {
       await logout()
       history.push("/login")
     } catch {
        setError('Failed to log out')
     }
}


  return (
    <>
    <Card className='profileCard'>
        <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <div className='emailAdd mt-5'>
           <strong>Email:</strong> {currentUser.email}
        </div>
        <Link to="/change-password" className='updateButt btn btn-primary w-100 mt-5'>
            Change Password
        </Link>
        </Card.Body>
    <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log out</Button>
      </div>
    </Card>
    </>
  )
}
