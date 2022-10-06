import {useState} from 'react'

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const url = 'http://localhost:3000/login'; 
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
            console.log(data)
        })
        .catch(error => console.log("submit error", error))
    }

return(
<form onSubmit={handleSubmit} className="flex flex-col w-1/3 space-y-3">
    <h1 className="text-lg text-text">НЭВТРЭХ</h1>
    <input onChange={handleEmailChange} value={email} className="border border-text px-5 py-1" placeholder="Таны имэйл хаяг" type="email" required/>
    <input onChange={handlePasswordChange} value={password} className="border border-text px-5 py-1" placeholder="Нууц үг" type="password" required/>
    <input className="text-sm  border border-text px-5 py-3 font-bold bg-text text-white cursor-pointer transition-all hover:bg-slate-900"  type="submit" value="НЭВТРЭХ" />
    <a href="#">Нууц үг сэргээх</a>
</form>
)
}