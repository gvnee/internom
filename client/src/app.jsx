import {Routes, Route} from "react-router-dom";
import Layout from "./routes/layout";
import LoginPage from "./routes/loginPage";
import ErrorPage from "./routes/error-page"
import RequireAuth from "./hooks/requireAuth";
import Books from "./routes/books";
import Home from "./routes/home";
import Profile from "./routes/profile";
import AddBook from "./routes/addBook";
import PersistLogin from "./components/persistLogin"
import Book from "./routes/book";

export default function App(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                
                <Route path="login" element={ <LoginPage /> } />
                
                <Route element={<PersistLogin />}>
                <Route element={<RequireAuth />}>
                    <Route path="/" element={<Home />} />   
                    <Route path="/books" element={<Books />} />   
                    <Route path="/book/:id" element={<Book />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/addBook" element={<AddBook />} /> 
                </Route>
                </Route>

                
                <Route path="*" element={ <ErrorPage /> } />

            </Route>
        </Routes>
    )
}