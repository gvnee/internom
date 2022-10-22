import {useState} from "react"

export default function EditPopup({togglePopup, id}){

    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [cover, setCover] = useState();

    const handleTitle = e => {

        setTitle(e.target.value);
    }
    const handlePrice = e => {
        setPrice(e.target.value);
    }
    const handleCover = e => {
        setCover(e.target.files[0]);
    }

    const handleSubmit = e => {
        
        e.preventDefault();
        setTitle('');
        setPrice();
        setCover(null);

        const url = `http://localhost:3000/book/${id}`;
        const formdata = new FormData();
        title && formdata.append("title", title);
        price && formdata.append("price", price);
        cover && formdata.append("cover", cover);

        const requestOptions = {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Origin': "http://localhost:5173"
            },
            // body: JSON.stringify({title, price, cover})
            body: formdata
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then((data) => {
            togglePopup()
        })
        .catch(error => console.log("submit error", error))
    }
    
    return (
        <div
        className="flex justify-center items-center w-screen h-screen bg-opacity-30 bg-black fixed top-0 left-0">

            <form
                onSubmit={handleSubmit}
                enctype="multipart/form-data"
                className="bg-white flex gap-1 flex-col rounded-lg border p-10 m-10">

                <div
                    className="cursor-pointer self-end text-lg"
                    onClick={() => togglePopup()}>
                    <i class="fa fa-arrow-left"></i>
                </div>

                <label
                    className="text-lg"
                    htmlFor="title">
                    Book title
                </label>

                <input
                    onChange={handleTitle}
                    value={title}
                    className="border px-5 py-1 rounded-lg" type="text"
                    name="title"
                    id="title" />

                <label
                    className="text-lg"
                    htmlFor="price">
                    Price
                </label>

                <input
                    onChange={handlePrice}
                    value={price}
                    className="border px-5 py-1 rounded-lg"
                    type="number"
                    name="price"
                    id="price" />

                
                <label htmlFor="cover">Cover</label>
                <input
                    onChange={handleCover}
                    className="text-lg"
                    type="file"
                    accept="image/*"
                    name="cover"
                    id="cover" />

                <input
                    className="text-sm rounded-lg my-10 px-5 py-3 font-bold bg-green-600 text-white cursor-pointer transition-all hover:bg-green-500"
                    type="submit"
                    value="Edit" />
                
            </form>
        </div>
    );
}