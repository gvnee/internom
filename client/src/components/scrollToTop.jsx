import {useState, useEffect} from "react";

const scroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

export default function ScrollToTop(){

    const [topBtn, setTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setTopBtn(true);
            }
            else{
                setTopBtn(false);
            }
        })
    }, []);

    return(
        <div onClick={scroll} className="cursor-pointer fixed bottom-5 right-8 z-10 bg-text text-white">
            {topBtn && (<i className="fa fa-arrow-up p-5"></i>)}
        </div>
    )
}