import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';

const Demo = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setCredential('Demo-lition');
        setPassword('password');

        dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
            });
    };

    return (
        <button onClick={handleClick} type='submit'>Demo</button>
    )
};

export default Demo;
