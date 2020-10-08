import FooterCard from "../components/common/FooterCard"
import ProductCard from "../components/common/ProductCard"

const Home = () => {
  return (
    <div className="flex flex-wrap container mx-auto">
      <ProductCard 
        title="Afrodite viso anti age"
        price={22}
        imageUrl="https://www.euronatural.it/wp-content/uploads/2014/10/delicate-cleanser1.jpg"
      />
      <ProductCard 
        title="Afrodite viso anti age"
        price={22}
        imageUrl="https://www.euronatural.it/wp-content/uploads/2014/10/delicate-cleanser1.jpg"
      />
      <ProductCard 
        title="Afrodite viso anti age"
        price={22}
        imageUrl="https://www.euronatural.it/wp-content/uploads/2014/10/delicate-cleanser1.jpg"
      />
    </div>
  )
}

export default Home