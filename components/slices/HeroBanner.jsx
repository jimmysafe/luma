
const HeroBanner = ({ slice }) => {
    
    const { banner_text, image, button_link, button_text } = slice.primary

    return (
        <div 
            className="hero-banner relative z-0 w-full bg-center bg-cover min-h-banner flex justify-center items-center"
            style={{ backgroundImage: `url(${image.url})` }}
        >
            <div style={{ zIndex: 2 }}>
                <h1 className="text-white font-bold text-xxl">
                    {banner_text[0].text.toUpperCase()}
                </h1>
            </div>
        </div> 
    )
}

export default HeroBanner
