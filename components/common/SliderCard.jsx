
const ProductCard = ({ uid, imageUrl, title, price }) => {
    return (
        <div className="md:p-4 p-1">
            <div className="shadow p-4 text-center">
                <div 
                    className="bg-cover bg-center w-full h-48" 
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="my-4 font-bold text-gray-600">
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
