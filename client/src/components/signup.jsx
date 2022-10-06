import {useState, useEffect} from 'react';
// import ErrorPopUp from './errorPopup';

export default function Signup(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handlePassword2Change = e => {
        setPassword2(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const url = 'http://localhost:3000/signup';

        if(password === password2){   
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': "http://localhost:5173"
                },
                body: JSON.stringify({email, password})
            };

            fetch(url, requestOptions)
            .then(response => response.text())
            .then((data) => {
                setErrorMessage(data);
            })
            .catch(error => console.log("submit error", error))
        }
        else console.log("password not matching");
    }


return(
<form onSubmit={handleSubmit} className="flex flex-col w-1/3 space-y-3">
    {/* <ErrorPopUp errorText={errorMessage} /> */}
    <h1 className="text-lg text-text">БҮРТГҮҮЛЭХ</h1>
    <input onChange={handleEmailChange} value={email} className="border border-text px-5 py-1" placeholder="Таны имэйл хаяг" type="email" required />
    <input onChange={handlePasswordChange} value={password} className="border border-text px-5 py-1" placeholder="Нууц үг" type="password" required />
    <input onChange={handlePassword2Change} value={password2} className="border border-text px-5 py-1" placeholder="Нууц үгээ давт" type="password" required />
    <input className="text-sm  px-5 py-3 font-bold bg-green-600 text-white cursor-pointer transition-all hover:bg-green-500" placeholder="" type="submit" value="БҮРТГҮҮЛЭХ" />
    <div>{errorMessage}</div>
</form>
)
}