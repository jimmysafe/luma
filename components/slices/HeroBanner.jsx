import { RichText } from 'prismic-reactjs'


const HeroBanner = ({ slice }) => {
    
    const { banner_text, image, button_link, button_text, motto } = slice.primary

    console.log(slice.primary)

    return (
        <div 
            className="hero-banner relative z-0 w-full bg-center bg-cover min-h-banner flex justify-center items-center"
            style={{ backgroundImage: `url(${image.url})` }}
        >
            <div style={{ zIndex: 2 }}>
                <h1 className="text-white font-bold text-xxl">
                    {banner_text[0].text.toUpperCase()}
                </h1>
                {motto && motto.length > 0 &&
                    <div className="text-white font-bold text-lg text-center">
                        <RichText render={motto}/>
                    </div>
                }
            </div>
        </div> 
    )
}

export default HeroBanner
