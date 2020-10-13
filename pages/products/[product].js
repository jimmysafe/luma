import { getSingleProduct } from '../../prismic/queries'
import Seo from '../../components/Seo'
import { RichText } from 'prismic-reactjs'
import { useEffect } from 'react'
import Link from 'next/link'
import Products from '../../components/slices/Products'


const ProductPage = ({ product }) => {
  console.log(product)

  // Replaces all empty <p> with a </br>
  useEffect(() => {
      let allPs = document.querySelectorAll('p')
          allPs.forEach(p => {
          if(p.innerHTML === ''){
              let br = document.createElement('br');
              p.parentNode.replaceChild(br, p);
          }
      })
  }, [])

  return (
    <>
        {/* <Seo page={product} />  */}
        <div className="page-content py-8">
          <section className="flex md:flex-row flex-col items-start justify-between container mx-auto">
            <div className="img-container p-4 bg-white shadow-md w-full">
              <img src={product.data.product_image.url} alt={product.data.product_image.alt}/>
            </div>
            <div className="product-info w-full flex flex-col items-center">
              <div className="bg-white p-4 mb-4">
                <h1 className="text-xl font-bold mb-4">{product.data.title[0].text}</h1>
                <RichText render={product.data.product_description}/>
              </div>
              <div className="p-4 w-full flex md:flex-row items-center justify-between flex-col">
                <h3 className="text-xl font-bold md:mb-0 mb-4">Prezzo: €{product.data.price}</h3>
                <Link as="/contatti" href="/[page]">
                  <div className="cursor-pointer rounded-full bg-secondary px-10 py-2 text-white font-bold uppercase">
                      Richiedi Informazioni
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="mt-20">
                <div className="container mx-auto flex justify-center items-center">
                    <h3 className="font-bold text-gray-600 uppercase">Altre Varianti</h3>
                </div>
            </div>
            <Products slice={{ primary: { type: 'slider' }}} category={product.type}/>
          </section>
        </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const product = await getSingleProduct(query.product)
  return {
    props: {
      product: product || null
    }
  }
}


export default ProductPage