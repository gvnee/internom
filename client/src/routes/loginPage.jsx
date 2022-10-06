import Footer from '../components/footer';
import Header from '../components/header';
import ScrollToTop from '../components/scrollToTop';
import Login from '../components/login';
import Signup from '../components/signup';
import LoginInfo from "../components/loginInfo";


export default function LoginPage(){

    return(
        <>
        <Header />
        
        <div className="mx-auto max-w-4xl flex justify-evenly mt-20">
            <Login />
            <Signup />
        </div>

        <LoginInfo />

        <Footer />
        <ScrollToTop />
        </>
    )
}