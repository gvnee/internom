export default function Home(){
    return (
        <div className="bg-hero w-screen flex justify-center">
            <main className=" h-96 flex items-end gap-5 p-10 flex-col">
                <p className="text-base text-white tracking-[0.3em]">
                    "1984" номын зохиолч Жорж Оруэллийн ХАМГИЙН АЛДАРТАЙ УЛС ТӨРИЙН ЭЛЭГЛЭЛ
                </p>
                <p className="text-5xl uppercase font-bold text-text">Бүх амьтан тэгш эрхтэй</p>
                <p className="text-5xl uppercase font-bold text-rose-900">гэхдээ зарим амьтан</p>
                <p className="text-base uppercase text-text tracking-[0.1em]">Бусдаас илүү тэгш эрхтэй </p>
            </main>
        </div>
    )
}   