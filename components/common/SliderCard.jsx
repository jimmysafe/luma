import Link from 'next/link'

const SliderCard = ({ uid, imageUrl, title, price }) => {
    return (
        <Link href={`/products/[product]`} as={`/products/${uid}`}>
            <div className="md:p-4 p-1 h-full">
                <div className="flex flex-col shadow p-4 text-center h-full">
                    <div 
                        className="bg-cover bg-center w-full h-48" 
                        style={{
                            backgroundImage: `url(${imageUrl})`
                        }}
                    />
                    <div className="my-4 font-bold text-gray-600 flex-1">
                        <p className="uppercase">{title}</p>
                        <p>€ {price}</p>
                    </div>
                    <div className="rounded-full bg-primary px-10 py-2 text-gray-600 font-bold uppercase">
                        Visita
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SliderCard
