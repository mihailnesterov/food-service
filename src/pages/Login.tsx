import React, {FC, useState, useEffect} from 'react';

const loginUrl = 'http://ice-crm.fastweb-tech.ru/backend/api/users/security/login';

const Login: FC = () => {

    const [user, setUser] = useState(null);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        setLogin("admin");
        setPassword("123qwe");
    }, []);

    const getAuth = async () => await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'login-form': {login, password}})
    });

    console.log(user);
    

    const auth = (e: any) => {
        e.preventDefault();
        getAuth()
            .then(res => res.json())
            .then(data => setUser(data.user))
            .catch(err => console.log(err))
        return false;
    }

	return(
        <div>
            <form action={loginUrl} method="post"  onSubmit={auth}>
                <input type="text" placeholder="login" defaultValue={login} required/>
                <br />
                <input type="password" placeholder="password" defaultValue={password} required/>
                <br />
                <button type="submit">Войти</button>
            </form>
            
        </div>
    );
};

export default Login;