
const ProductCard = ({ uid, imageUrl, title, price }) => {
    return (
        <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="shadow p-4 text-center">
                <div 
                    className="bg-cover bg-center w-full h-48" 
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="my-4">
                    <p className="uppercase">{title}</p>
                    <p>EUR {price}</p>
                </div>
                <div className="rounded-full bg-primary px-10 py-2 text-gray-600 font-bold uppercase">
                    Visita
                </div>
            </div>
        </div>
    )
}

export default ProductCard
