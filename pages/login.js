import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e) => {
        if(e.target.name == 'username') {
            setUsername(e.target.value);
        }
        else if(e.target.name == 'password') {
            setPassword(e.target.value);
        }
        else {
            setConfirmPassword(e.target.value);
        }
    }

    const verify = () => {
        let errors = [];
        if(!username) {
            errors.push('Username is empty.');
        }
        if(!password) {
            errors.push('Password is empty.');
        }
        return errors;
    }

    const onSubmit = async () => {
        const errors = verify();
        if(errors.length) {
            //show errors
            return;
        }
        else {
            await axios.post('/api/auth/login', { username: username, password: password });
        }
    }

    return (
        <div>
            <div>
                <input type="text" name="username" onChange={onChange} />
            </div>
            <div>
                <input type="password" name="password" onChange={onChange} />
            </div>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Login;