import Link from 'next/link'

const FooterCard = () => {
    return (
        <div className="p-6 rounded text-white text-center bg-secondary max-w-sm flex justify-center items-center flex-col">
            <h4 className="uppercase font-bold text-xl">contatti</h4>
            <p className="my-3 text-sm px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, corporis?</p>
            <Link as="/contatti" href="/[page]">
                <div className="rounded-full bg-primary px-4 py-2 text-gray-600 font-bold uppercase cursor-pointer">
                    contattaci
                </div>
            </Link>
        </div>
    )
}

export default FooterCard
