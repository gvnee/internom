import {Routes, Route} from "react-router-dom";
import Layout from "./routes/layout";
import LoginPage from "./routes/loginPage";
import ErrorPage from "./routes/error-page"
import RequireAuth from "./components/requireAuth";
import Home from "./routes/home";
import Profile from "./routes/profile";
import AddBook from "./routes/addBook";

export default function App(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                
                
                <Route path="login" element={ <LoginPage /> } />
                
                <Route element={<RequireAuth />}>
                    <Route path="/" element={<Home />} />   
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/addBook" element={<AddBook />} /> 
                </Route>

                
                <Route path="*" element={ <ErrorPage /> } />

            </Route>
        </Routes>
    )
}