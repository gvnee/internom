import logo from "../assets/internom.png";
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header(){
const {auth} = useAuth();
return(
<div className="w-screen">
    <div className="h-1 w-screen bg-orange-500"></div>
    <div className="border-red border-b">
        <div className="flex justify-between mx-auto max-w-4xl p-2">
            <div className="flex items-center">
                <a href="#" className="hidden text-text mr-5 align-baseline md:block">
                    <i className="fa fa-money-bill"></i>БЭЛНЭЭР ТӨЛӨХ
                </a>
            <a href="#" className="hidden text-text md:block">
            <i className="fa fa-gift"></i>БЭЛГИЙН БООЛТ
            </a>
            </div>
            <div>
                {
                auth?.data ?
                <Link to={`/profile`} className="text-text text-base mr-5">
                    <i className="fa fa-user"></i>
                </Link>
                :
                <Link to={`/login`} className="text-text text-base mr-5">
                    <i className="fa fa-user"></i>
                </Link>
                }
                
                
                <a href="#" className="text-text text-base">
                    <i className="fa fa-cart-plus"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="flex m-auto max-w-4xl justify-between items-center py-6 flex-col md:flex-row">
        <div className="w-2/5 md:w-full">
            <Link to={`/`}>
                <img className="h-auto w-60 cursor-pointer" src={logo} alt="logo" />
            </Link>
        </div>
        <div className="flex w-3/5 md:w-full">
            <input type="text" className="border border-text px-5 py-1 w-full" placeholder="хайх" />
            <div className="bg-text flex items-center justify-center">
            <i className="fa fa-search text-white px-10"></i>
            </div>
        </div>
    </div>
    <nav className="bg-text text-white">
        <div className="flex flex-col max-w-4xl m-auto font-bold text-xs space-x-6 sm:flex-row">
            <Link to={`/`} className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500" ><i className="fa fa-home"></i></Link>
            <Link to={'/books'} className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500">НОМ</Link>
            <div className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500">ENGLISH BOOKS</div>
            <div className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500">ХҮҮХЭД</div>
            <div className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500">БИЧИГ ХЭРЭГ/БЭЛЭГ ДУРСГАЛ</div>
            <div className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500 text-orange-400"  >ТУСЛАМЖ</div>
            <Link to={`/addBook`} className="ll py-5 hover:cursor-pointer border-b-2 border-b-text hover:border-b-orange-500" >НОМ НЭМЭХ</Link>
        </div>
    </nav>
</div>
)
}