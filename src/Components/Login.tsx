import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const envUserName = process.env.REACT_APP_USER_NAME;
        const envPassword = process.env.REACT_APP_USER_PASSWORD;

        console.log('Env UserName:', envUserName);
        console.log('Env Password:', envPassword);

        if (username === envUserName && password === envPassword) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            navigate('/admin');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <>
            <h1>Iniciar sesión</h1>
            <div>
                <form onSubmit={handleLogin}>
                    <p>Usuario</p>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <p>Contraseña</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div>
                        <input type="submit" value="Entrar" />
                    </div>
                </form>
            </div>
        </>
    );
};
