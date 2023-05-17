import React, { useState, useEffect } from 'react';
import { FormLabel, TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserLoginData = [
    { username: 'kate', password: 'neer' },
];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const userData = localStorage.getItem('users');
        if (!userData) {
            localStorage.setItem('users', JSON.stringify(UserLoginData));
        }
    }, []);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const userData = localStorage.getItem('users');
        if (userData) {
            const userArray = JSON.parse(userData);
            const user = userArray.find((u) => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem('current', JSON.stringify(username));
                toast("Success"); console.log("button clicked")
            }
            else {
                alert("Login failed");
            }
        }
    };
    return (
        <div className="login" style={{ marginTop: 20 }}>
            <form className="formContent" onSubmit={handleLogin}>
                <div>
                    <FormLabel style={{ color: '#f9d3b4' }} >Username: </FormLabel>
                    <TextField style={{ backgroundColor: '#f9d3b4', borderRadius: 10 }}
                        type="text"
                        value={username}
                        onChange={handleUsername}
                        placeholder="username"
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <FormLabel style={{ color: '#f9d3b4' }}>Password: </FormLabel>
                    <TextField style={{ backgroundColor: '#f9d3b4', borderRadius: 10 }}
                        type="password" value={password} onChange={handlePassword} placeholder="password" />
                </div>
                <button style={{ marginTop: 20, backgroundColor: '#f9d3b4', borderRadius: 10, padding: 10 }}
                    type="submit">Log in</button>
                <ToastContainer />
            </form>
        </div>
    );
}
export default Login
