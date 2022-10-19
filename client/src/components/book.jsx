import cover from "../../../server/images/cover.jpeg";

export default function Book(props){
    return (
        <div>
            <img className="w-32" src={cover} alt="book cover image" />
            <p className="text-center text-lg my-4">{props.title}</p>
            <p className="text-orange-500 text-lg">price: {props.price}$</p>
        </div>
    )
};