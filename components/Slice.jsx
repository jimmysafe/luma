import Gallery from "./slices/Gallery";
import HeroBanner from "./slices/HeroBanner"
import Products from "./slices/Products";
import Text from "./slices/Text";


const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
            case 'top_banner':
                return <HeroBanner {...props} />
            case 'testo':
                return <Text {...props} />
            case 'prodotti_cosmetica':
                return <Products {...props} category="prodotto_cosmetica" />
            case 'galleria_immagini':
                return <Gallery {...props} />
            default:
                return null
        }
    }

    return sliceType()
}

export default Slice