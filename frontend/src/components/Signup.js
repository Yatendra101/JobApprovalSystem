import React, { useState } from 'react';
import { signup } from '../api'; // Ensure this line is correct

const Signup = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const data = await signup({ username, password });
            setToken(data.token);
        } catch (err) {
            setError('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <button type="submit">Sign Up</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
};

export default Signup;
