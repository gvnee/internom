export default function ErrorPopUp(props){
    setTimeout((select) => {
        document.getElementById('popup').classList.add("hidden");
    }, 2000);
    
    return(

        <div id="popup" className="hidden fixed bg-popup top-10 px-10 py-4 text-white text-base rounded-md right-1/2 translate-x-1/2">
            {props.errorText}
        </div>
    )
}