import { useState, useEffect } from 'react'
import { getProducts } from '../../prismic/queries'
import ProductCard from '../common/ProductCard'
import SliderCard from '../common/SliderCard'
import ItemsCarousel from 'react-items-carousel';


const Products = ({ slice, category }) => {

    const displayType = slice.primary.type
    const [products, setProducts] = useState([])
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const isMobile = process.browser && window.innerWidth <= 768

    useEffect(() => {
        async function loadProducts(){
            let _products = await getProducts(category)
            setProducts(_products)
        }
        loadProducts()
    }, [slice])

    if(!products.length) return <p>Loading...</p>

    const renderList = () => {
        return (
            <div className="container mx-auto flex flex-wrap py-10 md:px-40 px-4">
                {products.map(item => (
                    <ProductCard 
                        key={item.id}
                        uid={item.uid}
                        title={item.data.title[0].text}
                        price={item.data.price}
                        imageUrl={item.data.product_image.url}
                    />
                ))}
            </div>
        )
    }

    const renderSlider = () => {

          return (
            <div className="container mx-auto md:px-40 px-0">
                
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={isMobile ? 2 : 4}
                gutter={0}
                leftChevron={<img src="/images/chevron-left.svg" alt=""/>}
                rightChevron={<img src="/images/chevron-right.svg" alt=""/>}
                outsideChevron={!isMobile}
                chevronWidth={10}
            >
                {products.map(item => (
                    <SliderCard 
                        key={item.id}
                        uid={item.uid}
                        title={item.data.title[0].text}
                        price={item.data.price}
                        imageUrl={item.data.product_image.url}
                    />
                ))}
            </ItemsCarousel>
            </div>
          )
    }

    if(displayType === 'lista') return renderList()
    else return renderSlider()
}

export default Products
