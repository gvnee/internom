import {useState, useEffect} from "react";
import Book from "../components/book"
import useAxiosPrivate from "../hooks/useAxiosPrivate";
export default function Books(){

    const [books, setBooks] = useState([]);
    
    // const axiosPrivate = useAxiosPrivate();
    // useEffect(() => {
    //     let isMounted = true;
    //     const controller = new AbortController();

    //     const getBooks = async () => {
    //         try{
    //             const res = await axiosPrivate.get('/book', {
    //                 signal: controller.signal
    //             });
    //             isMounted && setBooks(res.data);
    //         }catch(err){console.error(err)}
    //     }

    //     getBooks();

    //     return () => {
    //         isMounted = false;
    //         controller.abort();
    //     }
    // }, []);

    function getBooks(){
        const url = "http://localhost:3000/book";

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
            console.log(data);

            setBooks(data.books);
            console.log("data", data.books)
        })  
    }

    useEffect(() => {
        getBooks();
    }, []);

    
    return(
        <main className="flex gap-10 p-4 flex-wrap w-screen">
            {books?.length
                ? books.map(book =>(
                    <Book id={book.id} key={book.id} title={book.title} price={book.price} image={book.image} />)
                    )
                 : <p>No books to display</p>
            }
        </main>
    )
} 