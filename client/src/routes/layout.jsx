import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTop from "../components/scrollToTop";
import {Outlet} from "react-router-dom";

export default function Root(){
    return(
        <main>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </main>
    )
}