import {Link} from "react-router-dom"

export default function Book(props){

    return (
        <Link className="w-1/6" to={`/book/${props.id}`}>
            <img src={ 'http://localhost:3000/images/' + props.image } alt="book cover image" />
            <p className="text-center text-lg my-4">{props.title}</p>
            <p className="text-orange-500 text-lg">price: {props.price}$</p>
        </Link>
    )
};