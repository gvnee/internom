import { useState } from "react";

export default function AddBook(){

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [cover, setCover] = useState();

    const handleTitle = e => {
        setTitle(e.target.value);
    }
    const handlePrice = e => {
        setPrice(e.target.value);
    }
    const handleCover = e => {
        setCover(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if(price > 0){
            const url = 'http://localhost:3000/book';
            // const url = 'http://httpbin.org/anything';
            console.log(cover);

            const formdata = new FormData();
            formdata.append("title", title);
            formdata.append("price", price);
            formdata.append("cover", cover);

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
                console.log(data);
            })
            .catch(error => console.log("submit error", error))
        }

    }
    
    
    return (
        <div className="flex w-full items-center justify-center">
            <form
                onSubmit={handleSubmit}
                enctype="multipart/form-data"
                className="flex gap-1 flex-col rounded-lg border p-10 m-10">

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
                    id="title"
                    required />

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
                    id="price"
                    required />

                
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
                    value="ADD"
                    required />
            </form>
        </div>
    );
}