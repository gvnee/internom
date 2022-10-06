export default function Footer(){
    return(
        <footer className="p-10 w-full bg-footer">

        <div className="flex max-w-4xl m-auto">
            <ul className="w-1/2">
                <li className="text-xs tracking-[0.3em] font-bold uppercase mb-4">ХОЛБОО БАРИХ</li>
                <li className="text-base font-bold">info@internom.mn</li>
                <li className="text-base font-bold mb-4">7577 7700</li>
                <li className="text-xs">Шинэ, бэстселлер ном, хямдрал, урамшууллын талаарх мэдээллийг цаг алдалгүй авахыг хүсвэл манай жагсаалтад бүртгүүлээрэй!</li>
                <li className="w-full">
                    <input className="w- px-5 border border-gray-400 py-1" type="text" placeholder="Имэйл хаяг" />
                    <button>БҮРТГҮҮЛЭХ</button>
                </li>
                <li className="py-10 tracking-[0.2em]"> © 2014-2020 Интерном ХХК. Бүх эрх хуулиар хамгаалагдсан. </li>
            </ul>
            <ul className="w-1/4 flex flex-col items-end">
                <li className="text-xs tracking-[0.3em] font-bold uppercase">Интерном</li>
                <li><a href="#">Бидний тухай</a></li>
                <li><a href="#">Холбоо барих</a></li>
                <li><a href="#">Манай дэлгүүрүүд</a></li>
                <li><a href="#">Бэстселлер</a></li>
                <li><a href="#">Шинэ</a></li>
                <li><a href="#">Арга хэмжээ</a></li>
            </ul>
            <ul className="w-1/4 flex flex-col items-end">
                <li className="text-xs tracking-[0.3em] font-bold uppercase">Тусламж</li>
                <li><a href="#">Захиалга хийх</a></li>
                <li><a href="#">Төлбөрийн хэрэгслүүд</a></li>
                <li><a href="#">Захиалга батлах, цуцлах</a></li>
                <li><a href="#">Хүргэлт, буцаалт</a></li>
                <li><a href="#">Бараа сонгох</a></li>
                <li><a href="#">Үйлчилгээний нөхцөл</a></li>
            </ul>
        </div>
        </footer>

    )
}