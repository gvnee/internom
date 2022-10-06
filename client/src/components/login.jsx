export default function Login(){
    return(
        <>
        <div className="mx-auto max-w-4xl flex justify-evenly mt-20">
            <form className="flex flex-col w-1/3 space-y-3">
                <h1 className="text-lg text-text">НЭВТРЭХ</h1>
                <input className="border border-text px-5 py-1" placeholder="Таны имэйл хаяг" type="email" />
                <input className="border border-text px-5 py-1" placeholder="Нууц үг" type="password" />
                <input className="text-sm  border border-text px-5 py-3 font-bold bg-text text-white"  type="submit" value="НЭВТРЭХ" />
                <a href="#">Нууц үг сэргээх</a>
            </form>
            <form className="flex flex-col w-1/3 space-y-3">
                <h1 className="text-lg text-text">БҮРТГҮҮЛЭХ</h1>
                <input className="border border-text px-5 py-1" placeholder="Таны имэйл хаяг" type="email" />
                <input className="border border-text px-5 py-1" placeholder="Нууц үг" type="password" />
                <input className="border border-text px-5 py-1" placeholder="Нууц үгээ давт" type="password" />
                <input className="text-sm  px-5 py-3 font-bold bg-green-600 text-white" placeholder="" type="submit" value="БҮРТГҮҮЛЭХ" />
            </form>
        </div>
        <div className="mx-auto max-w-4xl">
            <div className="w-full border-b border-gray pb-5 mt-32">
                <div className="text-rng text-sm">ХЭРЭГЛЭГЧ БОЛСНООР ТА...</div>
            </div>
            <div className="flex flex-col md:flex-row text-xs p-5 justify-between">
                <div className="flex flex-col">
                    <div><i className="fa fa-check"></i>Номын хамгийн өргөн сонголт </div>
                    <div><i className="fa fa-check"></i>Байнгын хямдрал </div>
                </div>
                <div className="flex flex-col">
                    <div><i className="fa fa-check"></i>Номын хамгийн өргөн сонголт </div>
                    <div><i className="fa fa-check"></i>Байнгын хямдрал </div>
                </div>
                <div className="flex flex-col">
                    <div><i className="fa fa-check"></i>Номын хамгийн өргөн сонголт </div>
                    <div><i className="fa fa-check"></i>Байнгын хямдрал </div>
                </div>
            </div>
        </div>
        </>
    )
}