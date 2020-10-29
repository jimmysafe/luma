import SectionTitle from "./slices/SectionTitle";
import Gallery from "./slices/Gallery";
import HeroBanner from "./slices/HeroBanner"
import Products from "./slices/Products";
import Text from "./slices/Text";
import ContactForm from "./slices/ContactForm";


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
            case 'prodotti_gastronomia':
                return <Products {...props} category="prodotto_gastronomia" />
            case 'galleria_immagini':
                return <Gallery {...props} />
            case 'titolo_sezione':
                return <SectionTitle {...props} />
            case 'modulo_contatto':
                return <ContactForm {...props} />
            default:
                return null
        }
    }

    return sliceType()
}

export default Slice