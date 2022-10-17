import cover from "../assets/cover.jpeg"

export default function Book(props){
    return (
        <div>
            <img src={cover} alt="book cover image" />
            <p>props.price</p>
            <p>props.title</p>
        </div>
    )
};