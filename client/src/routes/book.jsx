import {Navigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import EditPopup from "../components/editPopup";


export default function Book(){

    const {id} = useParams();

    const [popup, setPopup] = useState(false);

    function togglePopup(){
        setPopup(!popup);
    }   
    
    function handleDelete(){
        const url = `http://localhost:3000/book/${id}`;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Origin': "http://etest:5173"
            },
            credentials: "include"
        };
        fetch(url, requestOptions)
        .then(res => setRedirect(true))

    }

    const [book, setBook] = useState({});
    const [redirect, setRedirect] = useState(false);


    function getBook(){
        const url = `http://localhost:3000/book/${id}`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Origin': "http://etest:5173"
            },
            credentials: "include"
        };
        fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            setBook(data);
        })  
    }

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className="w-1/3 p-10 flex gap-4">
            <img src={ 'http://localhost:3000/images/' + book.image } alt="book cover image" />
            <div>
                <p className="text-center text-4xl my-4">{book.title}</p>
                <p className="text-orange-500 text-lg">price: {book.price}$</p>
                <div
                    onClick={handleDelete}
                    className="text-sm  border rounded-lg px-10 py-3 font-bold bg-red-600 text-white cursor-pointer transition-all">
                    Delete
                </div>

                <div
                    onClick={() => togglePopup()}
                    className="text-sm  border rounded-lg px-10 py-3 mt-5 font-bold bg-green-600 text-white cursor-pointer transition-all">
                    Edit
                </div>

                {popup && <EditPopup togglePopup={togglePopup} id={id} />}
                {redirect && <Navigate replace to="/" />}

            </div>
        </div>
    )
};