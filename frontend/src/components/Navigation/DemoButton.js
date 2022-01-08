import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';

const Demo = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setCredential('Demo-lition');
        setPassword('password');

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                // if (data && data.errors) setErrors(data.errors);
            });
    };

    return (
        <button onSubmit={onSubmit} type='submit'>Demo</button>
    )
};

export default Demo;
