export default function Login(){
return(
<form className="flex flex-col w-1/3 space-y-3">
    <h1 className="text-lg text-text">НЭВТРЭХ</h1>
    <input className="border border-text px-5 py-1" placeholder="Таны имэйл хаяг" type="email" />
    <input className="border border-text px-5 py-1" placeholder="Нууц үг" type="password" />
    <input className="text-sm  border border-text px-5 py-3 font-bold bg-text text-white cursor-pointer transition-all hover:bg-slate-900"  type="submit" value="НЭВТРЭХ" />
    <a href="#">Нууц үг сэргээх</a>
</form>
)
}