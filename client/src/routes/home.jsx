import {useState, useEffect} from "react";
import Book from "../components/book"
import useAxiosPrivate from "../hooks/useAxiosPrivate";
export default function Home(){

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

            setBooks(data.books);
            console.log("data", data.books)
        })  
    }

    useEffect(() => {
        getBooks();
    }, []);

    
    return(
        <main className="flex gap-10 p-4">
            {/* {console.log(books)} */}
            {books?.length
                ? books.map(book =>(
                        <Book key={book.id} title={book.title} price={book.price} />)
                        )
                 : <p>No books to display</p>
            }
        </main>
    )
} 