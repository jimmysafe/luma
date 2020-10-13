
const SectionTitle = ({ slice }) => {
    console.log(slice)
    return (
        <div className="md:px-40 px-0 mt-8">
            <div className="container mx-auto flex justify-center items-center">
                {slice.primary.img &&
                    <img src={slice.primary.img.url} alt={slice.primary.img.alt} className="w-12 m-2"/>
                }
                <h3 className="font-bold text-gray-600 uppercase">{slice.primary.section_title[0].text}</h3>
            </div>
        </div>
    )
}

export default SectionTitle
